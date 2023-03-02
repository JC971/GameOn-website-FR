function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector("#inscritBtn");
const closeModale = document.querySelector("#closeModale");
const formData = document.querySelectorAll(".formData");

const closeModalBtn = document.querySelector(".close");



// launch modal event

modalBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



//je cible le bouton c'est parti 

let btn = document.querySelector(".btn-submit");
console.log(btn)

//je rentre les informations pour vérifier si c'est un prénom valide

function validateFirstNameInput(input) {
  var firstNameRegex = /^[a-zA-Z]+$/;
  if (!firstNameRegex.test(input.value)) {
    input.setCustomValidity("Prénom non valide");
  } else {
    input.setCustomValidity("");
  }
}

var firstNameInput = document.getElementById("first");
firstNameInput.addEventListener("input", function () {
  validateFirstNameInput(firstNameInput);
});

// je rentre les informations pour vérifier le nom

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
  if (isNaN(inputValue) || inputValue < 0 || inputValue > 10) {
    numberInput.setCustomValidity("Please enter a number between 0 and 10");
  } else {
    numberInput.setCustomValidity("");
  }
});

// checkbox
//quels tournois
var tournois = document.getElementById("location1");

// les modales conditions 

function validate() {
  if (!document.getElementById("checkbox1").checked) {
    alert("Please accept the terms and conditions before submitting.");
    return false;
  }
  // If the checkbox is checked, submit the form
  return true;
}

// close modal event
closeModale.addEventListener('click', function (e) {
  modalbg.style.display = "none";
})
// close modal
function launchModal() {
  modalbg.style.display = "block";
}

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

