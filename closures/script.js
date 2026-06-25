function createToaster(config){
    return function(message){
        let msg = document.createElement("div");
        msg.textContent = message
        msg.classList.add("toast");

        let parent = document.createElement("div");
        parent.classList.add("parent");
        parent.appendChild(msg);
        document.body.appendChild(parent);
    }
}

let noti = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3
});

noti("If u never taste bad apple you'll never appreciate a good one.")