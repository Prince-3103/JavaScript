// New cards create karna ha, data local storge mai save krna hai\
// localStorage sa hi card show krna hai
// buttons ko handle krna hai
// Filters ko handle krna hai

let add = document.querySelector("#add-btn");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector("#close-form");

const form = document.querySelector("form")
const imageInput = document.querySelector("#image-url");
const fullNameInput = document.querySelector("#full-name");
const homeTownInput = document.querySelector("#home-town");
const purposeInput = document.querySelector("#purpose");

const categoryRadios = document.querySelectorAll('input[name="category"]');

const createNoteBtn = document.querySelector("#create-note");



// CODE

function saveToLocalStorage(newObj){
    if(localStorage.getItem("tasks") === null){
        let oldTask = [];
        oldTask.push(newObj);
        localStorage.setItem("tasks", JSON.stringify(oldTask));
    }
    else{
        let oldTask = JSON.parse(localStorage.getItem("tasks"));
        oldTask.push(newObj);
        localStorage.setItem("tasks", JSON.stringify(oldTask));
    }
}

add.addEventListener("click", function(){
    formContainer.style.display = "flex";
});
closeForm.addEventListener("click", function(){
    formContainer.style.display = "none"
});

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    const imageUrl = imageInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;
    categoryRadios.forEach(function(cat){
        if(cat.checked){
            selected = cat.value;
        }
    });

    if (imageUrl === "") {
        alert("Please enter an Image URL.");
        return;
    }

    if (fullName === "") {
        alert("Please enter your Full Name.");
        return;
    }

    if (homeTown === "") {
        alert("Please enter your Home Town.");
        return;
    }

    if (purpose === "") {
        alert("Please enter the Purpose.");
        return;
    }
    if(!selected){
        alert("Please select one category.");
        return;
    }

    saveToLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        selected
    });
    form.reset();
    formContainer.style.display = "none";
});