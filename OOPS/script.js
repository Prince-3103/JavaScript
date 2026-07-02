class Pen{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
    remove(){
        document.querySelectorAll("h1").forEach((elem)=>{
            if(elem.style.color === this.color){
                elem.remove();
            }
        })
    }
}

let P1 = new Pen("doms", "black", 10);
let P2 = new Pen("Natraj", "blue", 15);