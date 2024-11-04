let monTitre = document.querySelector("body > h1");

let saisie

function evenementClic() {
  monTitre.classList.add("rouge");
}

monTitre.addEventListener("click", () => evenementClic());
