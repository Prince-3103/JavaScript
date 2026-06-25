function createToaster(config){
    return function(message){
        let msg = document.createElement("div");
        msg.textContent = message
        msg.classList.add("toast");
 
        if(config.theme === "dark"){
            msg.style.backgroundColor = "gray";
            msg.style.color = "white";
        } 
        else{
            msg.style.backgroundColor = "white";
            msg.style.color = "black";
        }

        // msg.style.positionX

        document.querySelector(".parent").appendChild(msg);

        setTimeout(() =>{
            document.querySelector(".parent").removeChild(msg)
        }, config.duration * 1000);
    }
}

let noti = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "light",
    duration: 3
});

noti("Prince sent you request")