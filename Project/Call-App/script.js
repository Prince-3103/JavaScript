// New cards create karna ha, data local storge mai save krna hai\
// localStorage sa hi card show krna hai
// buttons ko handle krna hai
// Filters ko handle krna hai

let add = document.querySelector("#add-btn");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector("#close-form");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#up-btn");
const downBtn = document.querySelector("#down-btn");

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
    showCards();
});

function showCards(){
    let allTasks = JSON.parse(localStorage.getItem("tasks"));
    
    allTasks.forEach(function(task){
        // Create note-card
        const card = document.createElement("div");
        card.classList.add("note-card");

        // Now for profile img
        const profileImg = document.createElement("img");
        profileImg.src = task.imageUrl;
        // Append profile img in note-card
        card.appendChild(profileImg);

        //Now Card Content
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        // Now name
        const name = document.createElement("h3")
        name.textContent = task.fullName;
        cardContent.appendChild(name);

        // Info of address class
        const infoAddress = document.createElement("div");
        infoAddress.classList.add("info");

        const homeTownLabel = document.createElement("span");
        homeTownLabel.textContent = "Home town"

        const homeTownValue = document.createElement("span");
        homeTownValue.textContent = task.homeTown;

        infoAddress.appendChild(homeTownLabel);
        infoAddress.appendChild(homeTownValue);
        cardContent.appendChild(infoAddress);

        // Now add info booking
        const infoBooking = document.createElement("div")
        infoBooking.classList.add("info")

        const infoBookingLabel = document.createElement("span");
        infoBookingLabel.textContent = "Purpose"

        const infoBookingValue = document.createElement("span");
        infoBookingValue.textContent = task.purpose;

        infoBooking.appendChild(infoBookingLabel);
        infoBooking.appendChild(infoBookingValue);
        cardContent.appendChild(infoBooking);

        // Making Call and message action button
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("actions");

        const callBtn = document.createElement("button");
        callBtn.classList.add("call");
        callBtn.innerHTML = '<i class="ri-phone-fill"></i> Call';

        const msgBtn = document.createElement("button");
        msgBtn.textContent = "Message"; 

        buttonDiv.appendChild(callBtn);
        buttonDiv.appendChild(msgBtn);
        cardContent.appendChild(buttonDiv);

        // Now append card-content in note-card
        card.appendChild(cardContent);
        document.querySelector(".stack").appendChild(card)
    });
}
showCards();

function updateStack(){
    const cards = document.querySelectorAll(".stack .card");

    cards.forEach(function(card, index){
        card.style.zIndex = 3 - index;
        card.style.transform = `translate(${index * 10}px) scale(${1 - index * 0.2})`;
        card.style.opacity = `${1 - index * 0.2}`;
    });
}

upBtn.addEventListener("click", function(){
    let lastElement = stack.lastElementChild;
    if(lastElement){
        stack.insertBefore(lastElement, stack.firstElementChild);
        updateStack();
    }
});
downBtn.addEventListener("click", function(){
    const firstElement = stack.firstElementChild;
    if(firstElement){
        stack.appendChild(firstElement);
        updateStack();
    }
});