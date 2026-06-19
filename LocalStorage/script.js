function setDarkOrLight(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}
setDarkOrLight();

let btn = document.querySelector("#theme-btn");
btn.addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.btn.classList.add("light");
    }
    else{
        document.btn.classList.remove("light");
        document.btn.classList.add("dark")
    }
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setDarkOrLight);