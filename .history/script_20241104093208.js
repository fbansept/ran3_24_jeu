function frame() {
  positionXjoueur += vitesseX;
  joueur.style.left = positionXjoueur + "px";

  if (positionXjoueur >= 1150 || positionXjoueur <= 0) {
    vitesseX = -vitesseX;
  }
}

let positionXjoueur = 0;
let vitesseX = 10;
let hauteurScene = 600;
let hauteurScene = 600;

// let joueur = document.getElementById("joueur")
let joueur = document.querySelector("#joueur");
setInterval(frame, 1000 / 60);
