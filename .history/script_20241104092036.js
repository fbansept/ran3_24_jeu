function frame() {
  positionXjoueur += vitesse;
  joueur.style.left = positionXjoueur + "px";

  if(positionXjoueur >) {

  }
}

let positionXjoueur = 0;
let vitesse = 10;

// let joueur = document.getElementById("joueur")
let joueur = document.querySelector("#joueur");
setInterval(frame, 1000 / 60);