let monTitre = document.querySelector("body > h1");

let saisie = prompt("saisir votre age :");
alert("vous avez " + saisie + " ans");

function evenementClic() {
  monTitre.classList.add("rouge");
}

monTitre.addEventListener("click", () => evenementClic());
