function frame() {
  positionXballe += vitesseXballe;
  positionYballe += vitesseY;

  joueur.style.left = positionXballe + "px";
  joueur.style.top = positionYballe + "px";

  if (positionXballe >= largeurScene - largeurJoueur || positionXballe <= 0) {
    vitesseXballe = -vitesseXballe;
  }

  if (positionYballe >= hauteurScene - largeurJoueur || positionYballe <= 0) {
    vitesseY = -vitesseY;
  }

  console.log(toucheFlecheBasPresse);
}

let positionXballe = 0;
let vitesseXballe = 10;
let positionYballe = 0;
let vitesseY = 8;

let largeurJoueur = 100;
let hauteurScene = 1000;
let largeurScene = 1000;
let toucheFlecheBasPresse = false;
let toucheFlecheHautPresse = false;

const joueur = document.querySelector("#joueur");
const scene = document.querySelector("#scene");
scene.style.width = largeurScene + "px";
scene.style.height = hauteurScene + "px";
joueur.style.width = largeurJoueur + "px";
joueur.style.height = largeurJoueur + "px";

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
