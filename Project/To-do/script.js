let inputGroup = document.querySelector(".input-group");
let todoInp = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
let todoList = document.querySelector("#todo-list");

inputGroup.addEventListener("submit", function(evt){
    evt.preventDefault()
    
    if(!todoInp.value.trim()){
        alert("Please Enter Valid Input");
        return;
    }
    let list = document.createElement("li");

    let task = document.createElement("span");
    task.textContent = todoInp.value.trim();
    list.appendChild(task);

    let btn = document.createElement("div");
    btn.classList.add("btn");
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="ri-edit-2-line"></i>';
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>';
    btn.appendChild(editBtn);
    btn.appendChild(deleteBtn);

    list.appendChild(btn);

    todoList.appendChild(list);
    todoInp.value = "";
    todoInp.focus();
});

todoList.addEventListener("click",function(evt){
    const deleteBtn = evt.target.closest(".delete-btn");

    if(deleteBtn){
        let listContent = deleteBtn.closest("li");
        listContent.remove();
    }
})