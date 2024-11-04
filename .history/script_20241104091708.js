function frame() {
  i += vitesse;
  joueur.style.left = i + "px";

  //test
}

let  = 0;
let vitesse = 10;

// let joueur = document.getElementById("joueur")
let joueur = document.querySelector("#joueur");
setInterval(frame, 1000 / 60);
