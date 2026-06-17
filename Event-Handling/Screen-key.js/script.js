let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(value){
    if(value.key === " "){
        h1.textContent = "Space";
    }
    else{
        h1.textContent = value.key;   
    }
})