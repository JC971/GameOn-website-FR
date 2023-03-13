
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector("#inscritBtn");
const closeModale = document.querySelector("#closeModale");
const formData = document.querySelectorAll(".formData");

const closeModalBtn = document.querySelector(".close");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Fonction pour lancer la modale
function launchModal() {
  //on change le comportement de la modale qui etait en mode display none pour le passer en mode display block
  modalbg.style.display = "block";
}

closeModale.addEventListener('click', function (e) {
  modalbg.style.display = "none";
})
//
//small


//je rentre les informations pour vérifier si c'est un prénom valide a l'aide de la fonction validateFirstNameInput

function validateFirstNameInput(input) {
  var firstNameRegex = /^[a-zA-Z]+$/;
  if (!firstNameRegex.test(input.value)) {
    input.setCustomValidity("Prénom non valide");
  } else {
    input.setCustomValidity("");
  }
}
//je selectionne les donnees du champ avec son id first
var firstNameInput = document.getElementById("first");
firstNameInput.addEventListener("input", function () {
  validateFirstNameInput(firstNameInput);
});

// je rentre les informations pour vérifier le Nom

function validateLastNameInput(input) {
  var lastNameRegex = /^[a-zA-Z]+$/;
  if (!lastNameRegex.test(input.value)) {
    input.setCustomValidity("Le Nom de famille n'est pas valide");
  } else {
    input.setCustomValidity("");
  }
}

var lastNameInput = document.getElementById("last");
lastNameInput.addEventListener("input", function () {
  validateLastNameInput(lastNameInput);
});

// nombre de tournois 
var numberInput = document.getElementById("quantity");

numberInput.addEventListener("input", function () {
  var inputValue = parseInt(numberInput.value);
  if (isNaN(inputValue) || inputValue < 0 || inputValue > 30) {
    numberInput.setCustomValidity("Please enter a number between 0 and 10");
  } else {
    numberInput.setCustomValidity("");
  }
});

// les  conditions d'utilisation

function validate() {
  if (!document.getElementById("checkbox1").checked) {
    alert("Acceptez les conditions d'utilisation avant de valider.");
    return false;
  }
  // If the checkbox is checked, submit the form
  return true;
}

// Lancement de la modale on recupere le bouton de l'id je m'inscris pour pouvoir l'ouvrir

modalBtn.addEventListener("click", launchModal);

/*
surname.addEventListener('input', checkFormCompletion);
lastName.addEventListener('input', checkFormCompletion);
email.addEventListener('input', checkFormCompletion);
birth.addEventListener('input', checkFormCompletion);
quantity.addEventListener('input', checkFormCompletion);

function checkFormCompletion() {
  if (surname.value && lastName.value && email.value && birth.value && quantity.value) {
    alert('merci');
    form.reset();
    form.style.display = 'none'
  }
}*/
