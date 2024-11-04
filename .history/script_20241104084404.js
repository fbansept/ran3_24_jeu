function frame() {
  console.log(i);
  i++;
}

let i = 0;

setInterval(1000 / 60, frame);
