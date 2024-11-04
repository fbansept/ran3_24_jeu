function frame() {
  positionXjoueur += vitesseX;
  positionYjoueur += vitesseX;

  joueur.style.left = positionXjoueur + "px";
  joueur.style.left = positionXjoueur + "px";

  if (positionXjoueur >= 1150 || positionXjoueur <= 0) {
    vitesseX = -vitesseX;
  }

  if (positionYjoueur >= 550 || positionYjoueur <= 0) {
    vitesseY = -vitesseY;
  }
}

let positionXjoueur = 0;
let vitesseX = 10;
let positionYjoueur = 0;
let vitesseY = 8;

let largeurJoueur = 50;
let hauteurScene = 600;
let largeurScene = 1200;

// let joueur = document.getElementById("joueur")
let joueur = document.querySelector("#joueur");
setInterval(frame, 1000 / 60);
