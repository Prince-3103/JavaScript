let seconds = 5;

let progress = document.querySelector(".progress");
let start = document.querySelector("#download-btn");
let h2 = document.querySelector("h2");

let count = 0;

start.addEventListener("click", function(){
    let intv = setInterval(function(){
        if(count <= 99){
            count++;
            progress.style.width = `${count}%`;
            document.querySelector(".percent").textContent = `${count}%`;
        }
        else{
            h2.textContent = "Downloading Complete";
            h2.style.color = "green";
            clearInterval(intv);
        }
    },(seconds * 1000)/100);
})
