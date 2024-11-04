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
}

let positionXjoueur = 0;
let vitesseX = 10;
let positionYjoueur = 0;
let vitesseY = 8;

let largeurJoueur = 100;
let hauteurScene = 1000;
let largeurScene = 1000;

const joueur = document.querySelector("#joueur");
const scene = document.querySelector("#scene");
scene.style.width = largeurScene + "px";
scene.style.height = hauteurScene + "px";
joueur.style.width = largeurJoueur + "px";
joueur.style.height = largeurJoueur + "px";




setInterval(frame, 1000 / 60);
