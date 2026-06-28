let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let pic = document.querySelector("#photo");


const userManager = {
    users: [],

    init: function(){
        form.addEventListener("submit", this.submitForm.bind(this));    // it will send object
    },
    submitForm: function(event){
        event.preventDefault();
        this.addUser();
        this.renderUi()
    },

    addUser: function(){
        this.users.push({
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            pic: pic.value
        })
        form.reset();
    },

    renderUi: function(){
        document.querySelector(".users").textContent = "";
        
        this.users.forEach((user, index)=>{
            const card = document.createElement("div");
            card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

            let img = document.createElement("img");
            img.className =  "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
            img.src = user.pic;
            img.alt  = "User Photo";
            card.appendChild(img);

            let name = document.createElement("h2");
            name.className = "text-2xl font-bold mb-1 text-blue-700";
            name.textContent = user.userName;
            card.appendChild(name);

            let role = document.createElement("p");
            role.className = "text-purple-500 mb-2 font-medium";
            role.textContent = user.role;
            card.appendChild(role);

            const about = document.createElement("p");
            about.className = "text-gray-700 text-center";
            about.textContent = user.bio;
            card.appendChild(about);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.className = "absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl";

            deleteBtn.addEventListener("click", ()=>{
                this.removeUser(index);
            })

            card.appendChild(deleteBtn);

            document.querySelector(".users").appendChild(card);
        })
        
    },
    removeUser: function(index){
        this.users.splice(index, 1);
        this.renderUi();
    }
};

userManager.init()