function frame() {
  console.log(i);
  i++;
}

let i = 0;
// let joueur = document.getElementById("joueur")
let joueur = document.getElementById("joueur");
setInterval(frame, 1000 / 60);
