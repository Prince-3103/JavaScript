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

function createTask(inpTask){
    
    let list = document.createElement("li");

    let task = document.createElement("span");
    task.textContent = inpTask;
    list.appendChild(task);

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
        createTask(saveTask.inpTask);
    })
}

inputGroup.addEventListener("submit", function(event){
    event.preventDefault();
    let inpTask = todoInp.value.trim();

    if(!inpTask){
        alert("Please Enter Valid Input");
        return;
    }
    createTask(inpTask);
    saveToLocalStorage({
        inpTask
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

    let isCompleted = false;

    if(doneBtn){
        let listContent = doneBtn.closest("li");
        listContent.firstElementChild.classList.toggle("completed");
        isCompleted = true;
    }

    if(editBtn){
        let listContent = editBtn.closest("li");
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
                listContent.firstElementChild.textContent = inp.trim();
                user = false;
            }
        }
        
    }
});

