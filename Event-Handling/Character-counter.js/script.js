let inp = document.querySelector("input");
let span = document.querySelector("span");
let limit = document.querySelector(".limit")

inp.addEventListener("input", function(evt){
    let left = 20 - evt.target.value.length;
    span.textContent = evt.target.value.length;

    limit.textContent = left;
    
    if(left < 0){
        limit.style.color = "red";
        span.style.color = "red";
    }
    else{
        limit.style.color = "white";
        span.style.color = "white";
    }
});