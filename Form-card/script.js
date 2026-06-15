let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets){
    // this use for not to reload the page after clicking on submit
    dets.preventDefault();

    // Create div tag with class card
    let card = document.createElement("div");
    card.classList.add("card");

    // Create div tag with class profile
    let profile = document.createElement("div");
    profile.classList.add("profile");

    // Create img tag with and src input taken by user any link
    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    // Create h3 tag with content of input
    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h4 = document.createElement("h4");
    h4.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    // profile -> img
    profile.appendChild(img);

    // card -> profile -> img
    card.appendChild(profile);

    // card -> (profile -> img), h3, h4,p
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    })
});
