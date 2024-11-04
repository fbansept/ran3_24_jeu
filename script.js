function frame() {
  i += 10;
  joueur.style.left = i + "px";
}

let i = 0;
// let joueur = document.getElementById("joueur")
let joueur = document.querySelector("#joueur");
setInterval(frame, 1000 / 60);
