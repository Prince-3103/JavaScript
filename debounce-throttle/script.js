let inp = document.querySelector("input");

// debounce -> ek delay bataoge tum utna delay ka stop jab bhi ayga tab action ka reaction huga
function debounce(func, delay){
    let timer;
    return function(...args){   // args = event in event listener
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args);
        }, delay);
    }
}

// throttle -> ek fix interval par chalunga action agar huta raha and apne ek interval btaya ho uss interval mai chlta rhunga but agar vo action stop hua tuh mera interval bhi stop ho jayga
function throttle(func, delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();   // It will give current time in milliseconds
        if(now - timer >= delay){
            timer = now;
            func(...args);
        }
    };
}

inp.addEventListener("input", debounce(function(){
    console.log("debounce")
}, 1000))

inp.addEventListener("input", throttle(function(){
    console.log("throttle")
}, 1000))