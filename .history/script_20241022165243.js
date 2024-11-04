let monTitre = document.querySelector("body > h1");

let saisie = prompt("saisir votre age :")


function evenementClic() {
  monTitre.classList.add("rouge");
}

monTitre.addEventListener("click", () => evenementClic());
