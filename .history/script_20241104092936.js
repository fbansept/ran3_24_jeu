function frame() {
  positionXjoueur += vitesse;
  joueur.style.left = positionXjoueur + "px";

  if (positionXjoueur >= 1150 || positionXjoueur <= 0) {
    vitesse = -vitesse;
  }
}

let positionXjoueur = 0;
let vitesseX = 10;

// let joueur = document.getElementById("joueur")
let joueur = document.querySelector("#joueur");
setInterval(frame, 1000 / 60);