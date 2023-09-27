console.log("Cześć Wtam ten kod jest już w repozytorium git" )

let button0 = document.querySelector(".button0");
let header = document.querySelector(".header");

button0.addEventListener("click", () => {
    header.remove();
});

let button = document.querySelector(".button");
let image = document.querySelector(".image");

button.addEventListener("click", () => {
    image.remove();
});

let button1 = document.querySelector(".button1");
let image1 = document.querySelector(".image1");

button1.addEventListener("click", () => {
    image1.remove();
});

let button2 = document.querySelector(".button2");
let image2 = document.querySelector(".image2");

button2.addEventListener("click", () => {
    image2.remove();
});

let changeColorButton = document.querySelector(".changeBackground");
let container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
    container.classList.toggle("whiteBackground")
});