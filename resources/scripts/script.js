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
}

function toFish() {
    document.getElementById("fish").style.width = "100%";
}
