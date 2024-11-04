let monTitre = document.querySelector("body > h1");

function evenementClic() {
  monTitre.classList.add("rouge");
}

monTitre.addEventListener("click", () => evenementClic());
