function frame() {
  console.log(i);
  i++;
}

let i = 0;
let joueur = 
setInterval(frame, 1000 / 60);
