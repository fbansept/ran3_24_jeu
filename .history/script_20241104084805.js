function frame() {
  console.log(i);
  i++;
}

let i = 0;

while (true) {
  frame();
}

//setInterval(frame, 1000 / 60);
