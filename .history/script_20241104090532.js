function frame() {
  i++;
  joueur.style.left = i + "";
}

let i = 0;
// let joueur = document.getElementById("joueur")
let joueur = document.querySelector("#joueur");
setInterval(frame, 1000 / 60);
