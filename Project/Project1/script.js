const users = [
    {
        name: "Prince",
        pic: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        bio: "The lion never loses sleep over the opinion of sheep. 🦁"
    },
    {
        name: "Preeti",
        pic: "https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "My hobbies include eating and thinking about what to eat next. 🍕"
    },
    {
        name: "Ekta",
        pic: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "My life is basically a loading screen. ⏳"
    },
    {
        name: "Vikas",
        pic: "https://plus.unsplash.com/premium_photo-1664304287258-f4509f1efb3b?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Sleeping is my cardio. 🛌"
    },
    {
        name: "Shubham",
        pic: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "I put the 'pro' in procrastination. 😴"
    },
    {
        name: "Aarushi",
        pic: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "I don't make mistakes, I create unexpected features. 🐛"
    },
    {
        name: "Mohan",
        pic: "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "I don't make mistakes, I create unexpected features. 🐛"
    }
];

function showUser(arr){
    arr.forEach(function(user){
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img")

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;
        
        const p = document.createElement("p");
        p.textContent = user.bio;

        // Append h3 and p in content
        content.appendChild(h3);
        content.appendChild(p);

        // Now appending img, bluredLayer and content in card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Finally appending card in 
        document.querySelector(".about").appendChild(card);
    });
}

showUser(users);

let inp = document.querySelector(".search-input");



inp.addEventListener("input", function(){
    let newUser = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inp.value.trim().toLowerCase());
    });
    document.querySelector(".about").innerHTML = "";
    if(newUser.length === 0){
        document.querySelector(".about").innerHTML = "<h1>No User Found</h1>";
    }
    else{
        showUser(newUser);
    }
});