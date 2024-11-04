function frame() {
  positionXballe += vitesseXballe;
  positionYballe += vitesseYballe;

  joueur.style.left = positionXballe + "px";
  joueur.style.top = positionYballe + "px";

  if (positionXballe >= largeurScene - largeurBAlle || positionXballe <= 0) {
    vitesseXballe = -vitesseXballe;
  }

  if (positionYballe >= hauteurScene - largeurBAlle || positionYballe <= 0) {
    vitesseYballe = -vitesseYballe;
  }

  console.log(toucheFlecheBasPresse);
}

let positionXballe = 0;
let vitesseXballe = 10;
let positionYballe = 0;
let vitesseYballe = 8;

let largeurBAlle = 100;
let hauteurScene = 1000;
let largeurScene = 1000;
let toucheFlecheBasPresse = false;
let toucheFlecheHautPresse = false;

const joueur = document.querySelector("#joueur");
const scene = document.querySelector("#scene");
scene.style.width = largeurScene + "px";
scene.style.height = hauteurScene + "px";
joueur.style.width = largeurBAlle + "px";
joueur.style.height = largeurBAlle + "px";

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
