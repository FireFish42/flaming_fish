let toFireVar = document.getElementById("left");
let toFishVar = document.getElementById("right");

toFireVar.addEventListener("keyup", function(event){
    if (KeyboardEvent.key === "Enter" || KeyboardEvent.key === " ") {
        event.preventDefault();
        toFireVar.click();
    }
});
toFireVar.addEventListener("click", toFire);

toFishVar.addEventListener("keyup", function(event) {
    if (KeyboardEvent.key === "Enter" || KeyboardEvent.key === " ") {
        event.preventDefault();
        toFireVar.click();
    }
});
toFishVar.addEventListener("click", toFish);

function toFire() {
    document.getElementById("fire").style.width = "100%";
    document.getElementById("fire-img").style.width = "35%";
    document.getElementById("landing").style.width = "0%";
    document.getElementById("return").hidden = false;
}

function toFish() {
    document.getElementById("fish").style.width = "100%";
    document.getElementById("landing").style.width = "0%";
}


let toLandingVar = document.getElementById("return");

toLandingVar.addEventListener("keyup", function(event) {
    if (KeyboardEvent.key === "Enter" || KeyboardEvent.key === " ") {
        event.preventDefault();
        toFireVar.click();
    }
});
toLandingVar.addEventListener("click", toLanding);

function toLanding() {
    document.getElementById("fire").style.width = "0%";
    document.getElementById("fire-img").style.width = "0%";
    document.getElementById("landing").style.width = "100%";
    document.getElementById("return").hidden = true;
}