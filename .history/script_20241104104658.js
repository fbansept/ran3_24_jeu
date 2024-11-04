function frame() {
  positionXjoueur += vitesseX;
  positionYjoueur += vitesseY;

  joueur.style.left = positionXjoueur + "px";
  joueur.style.top = positionYjoueur + "px";

  if (positionXjoueur >= largeurScene - largeurJoueur || positionXjoueur <= 0) {
    vitesseX = -vitesseX;
  }

  if (positionYjoueur >= hauteurScene - largeurJoueur || positionYjoueur <= 0) {
    vitesseY = -vitesseY;
  }

  console.log(toucheFlecheBasPresse);
}

let positionXjoueur = 0;
let vitesseX = 10;
let positionYjoueur = 0;
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

document.addEventListener("keyrelease", (e) => {

  

  if (e.code == "ArrowDown") {
    toucheFlecheBasPresse = false;
  }

  if (e.code == "ArrowUp") {
    toucheFlecheHautPresse = false;
  }
});

setInterval(frame, 1000 / 60);
