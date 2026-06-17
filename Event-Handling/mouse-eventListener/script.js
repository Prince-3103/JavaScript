let cont = document.querySelector("#container");

cont.addEventListener("mouseover",function(det){
    // cont.style.backgroundColor = "yellow";
    console.log(det);
});

cont.addEventListener("mouseout", ()=>{
    cont.style.backgroundColor = "red";
})