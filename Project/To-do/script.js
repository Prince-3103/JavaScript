let inputGroup = document.querySelector(".input-group");
let todoInp = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
let todoList = document.querySelector("#todo-list");

function saveToLocalStorage(newTask){
    if(localStorage.getItem("work") === null){
        let tasks = [];
        tasks.push(newTask);
        localStorage.setItem("work", JSON.stringify(tasks))
    }
    else{
        let tasks = JSON.parse(localStorage.getItem("work"));
        tasks.push(newTask);
        localStorage.setItem("work", JSON.stringify(tasks));
    }
}

function createTask(inpTask, isCompleted){
    
    let list = document.createElement("li");

    let task = document.createElement("span");
    task.textContent = inpTask;
    list.appendChild(task);
    if(isCompleted){
        task.classList.toggle("completed");
    }

    let btn = document.createElement("div");
    btn.classList.add("btn");
    let doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    doneBtn.innerHTML = '<i class="ri-check-fill"></i>';
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="ri-edit-2-line"></i>';
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>';
    btn.appendChild(doneBtn);
    btn.appendChild(editBtn);
    btn.appendChild(deleteBtn);

    list.appendChild(btn);

    todoList.appendChild(list);
    
    todoInp.value = "";
    todoInp.focus();
}

if(localStorage.getItem("work") !== null){
    console.log(localStorage.getItem("work"));
    let allTask = JSON.parse(localStorage.getItem("work"));
    allTask.forEach(function(saveTask){
        createTask(saveTask.inpTask, saveTask.isCompleted);
    })
}

inputGroup.addEventListener("submit", function(event){
    event.preventDefault();
    let inpTask = todoInp.value.trim();
    let isCompleted = false
    if(!inpTask){
        alert("Please Enter Valid Input");
        return;
    }
    createTask(inpTask, isCompleted);
    saveToLocalStorage({
        inpTask,
        isCompleted
    });
});

todoList.addEventListener("click", function(evt){
    const deleteBtn = evt.target.closest(".delete-btn");
    const doneBtn = evt.target.closest(".done-btn");
    const editBtn = evt.target.closest(".edit-btn");
    let allTask = JSON.parse(localStorage.getItem("work"));
    if(deleteBtn){
        let listContent = deleteBtn.closest("li");
        let newTask = allTask.filter(function(event){
            return listContent.firstElementChild.textContent !== event.inpTask 
        })
        localStorage.setItem("work", JSON.stringify(newTask));
        listContent.remove();
    }

    if(doneBtn){
        let listContent = doneBtn.closest("li");
        let doneTask = listContent.firstElementChild.textContent;
        listContent.firstElementChild.classList.toggle("completed");

        allTask.forEach(function(task){
            if(task.inpTask === doneTask){
                if(task.isCompleted){
                    task.isCompleted = false;
                }
                else{
                    task.isCompleted = true;
                }
            }
        });
        
        localStorage.setItem("work", JSON.stringify(allTask));
    }

    if(editBtn){
        let listContent = editBtn.closest("li");
        let oldTask = listContent.firstElementChild.textContent;
        let user = true;
        while(user){
            let inp = prompt(`Current Task: ${listContent.firstElementChild.textContent}\nEdit task: `);
            if(inp === null){
                user = false;
            }
            else if(!inp.trim()){
                alert("Please Enter Valid Task");
            }
            else{
                let newTask = inp.trim();
                listContent.firstElementChild.textContent = newTask;
                allTask.forEach(function(task){
                    if(task.inpTask === oldTask){
                        task.inpTask = newTask;
                    }
                });
                user = false;
            localStorage.setItem("work", JSON.stringify(allTask));

            }
        }
    }
});

