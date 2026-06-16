let cont = document.querySelector("#container")

window.addEventListener("mousemove", function(dets){
    cont.style.top = dets.clientY + "px";
    cont.style.left = dets.clientX + "px";
});