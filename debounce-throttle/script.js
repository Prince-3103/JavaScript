let inp = document.querySelector("input");

// debounce -> ek delay bataoge tum utna delay ka stop jab bhi ayga tab action ka reaction huga
function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args);
        }, delay);
    }
}



inp.addEventListener("input", debounce(function(){
    console.log("hui")
}, 1000))