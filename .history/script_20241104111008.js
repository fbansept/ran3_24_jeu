function frame() {
  positionXballe += vitesseXballe;
  positionYballe += vitesseYballe;

  balle.style.left = positionXballe + "px";
  balle.style.top = positionYballe + "px";

  if (positionXballe >= largeurScene - largeurBalle || positionXballe <= 0) {
    vitesseXballe = -vitesseXballe;
  }

  if (positionYballe >= hauteurScene - largeurBalle || positionYballe <= 0) {
    vitesseYballe = -vitesseYballe;
  }

  barre.style.left = positionXballe + "px";
  barre.style.top = positionYballe + "px";

  console.log(toucheFlecheBasPresse);
}

let positionXballe = 0;
let vitesseXballe = 10;
let positionYballe = 0;
let vitesseYballe = 8;

let largeurBalle = 100;
const hauteurScene = 1000;
const largeurScene = 1000;

let largeurBarre = 50;
let hauteurBarre = 200;
let positionXBarre = 100;
let positionYBarre = hauteurScene / 2 - hauteurBarre / 2;

let toucheFlecheBasPresse = false;
let toucheFlecheHautPresse = false;

const balle = document.querySelector("#balle");
const scene = document.querySelector("#scene");
const barre = document.querySelector("#barre");

scene.style.width = largeurScene + "px";
scene.style.height = hauteurScene + "px";

balle.style.width = largeurBalle + "px";
balle.style.height = largeurBalle + "px";

barre.style.width = largeurBarre + "px";
barre.style.height = hauteurBarre + "px";

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowDown") {
    toucheFlecheBasPresse = true;
  }

  if (e.code == "ArrowUp") {
    toucheFlecheHautPresse = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowDown") {
    toucheFlecheBasPresse = false;
  }

  if (e.code == "ArrowUp") {
    toucheFlecheHautPresse = false;
  }
});

setInterval(frame, 1000 / 60);
