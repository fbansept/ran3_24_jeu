function frame() {
  //----- GESTION DES DEPLACEMENTS ------

  positionXballe += vitesseXballe;
  positionYballe += vitesseYballe;

  balle.style.left = positionXballe + "px";
  balle.style.top = positionYballe + "px";

  barre.style.left = positionXbarre + "px";
  barre.style.top = positionYBarre + "px";

  //----- GESTION DES COLISIONS ------

  if (positionXballe >= largeurScene - largeurBalle || positionXballe <= 0) {
    vitesseXballe = -vitesseXballe;
  }

  if (positionYballe >= hauteurScene - largeurBalle || positionYballe <= 0) {
    vitesseYballe = -vitesseYballe;
  }

  if (
    positionXballe > positionXbarre &&
    positionXballe < positionXbarre + largeurBarre &&
    positionYballe > positionYBarre &&
    positionYballe < positionYBarre + 
  )
    if (toucheFlecheBasPresse && positionYBarre < hauteurScene - hauteurBarre) {
      //----- GESTION DES EVENEMENTS CLAVIERS ------

      positionYBarre += 8;
    }

  if (toucheFlecheHautPresse && positionYBarre > 0) {
    positionYBarre -= 8;
  }
}

//---- INITIALISATION DE LA BALLE ------

const balle = document.querySelector("#balle");
let positionXballe = 0;
let vitesseXballe = 10;
let positionYballe = 0;
let vitesseYballe = 8;
let largeurBalle = 30;
balle.style.width = largeurBalle + "px";
balle.style.height = largeurBalle + "px";

//---- INITIALISATION DE LA SCENE ------

const scene = document.querySelector("#scene");
const hauteurScene = 1000;
const largeurScene = 1000;
scene.style.width = largeurScene + "px";
scene.style.height = hauteurScene + "px";

//---- INITIALISATION DE LA BARRE ------

const barre = document.querySelector("#barre");
let largeurBarre = 50;
let hauteurBarre = 200;
let positionXbarre = 100;
let positionYBarre = hauteurScene / 2 - hauteurBarre / 2;
barre.style.width = largeurBarre + "px";
barre.style.height = hauteurBarre + "px";

//---- INITIALISATION DES EVENEMENTS ------

let toucheFlecheBasPresse = false;
let toucheFlecheHautPresse = false;

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
