// DOM Elements
const modalbg = document.querySelector(".bground");
const partiBtn = document.querySelector("#parti");
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last")
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

//fonction pour fermer la modale
function closeModal() {
  modalbg.style.display = "none";
}


//small

//je rentre les informations pour vérifier si c'est un prénom valide a l'aide de la fonction validateFirstNameInput

function validateFirstNameInput(firstname) {
  console.log("validate first name", firstname.length);
  if (firstname.length < 3)  {
    console.log("entrer un prénom valide");
    //faire apparaitre le messge d'erreur
    document.getElementById("small_text").style.display = "block";
    document.getElementById("first").style.border = "red 3px solid";
    document.getElementById("first").style.color = "red ";
  

    // 
  } else if (firstname.length > 2) {
    document.getElementById("first").style.color = "green ";
    document.getElementById("first").style.border = "lightGreen 3px solid";
    document.getElementById("small_text").style.display = "none";
  }

};


//je rentre les informations pour vérifier si c'est un nom valide a l'aide de la fonction validateNameInput

function validateLastNameInput(lastname) {
  console.log('validate lastname', lastname.length);
  if (lastname.length < 3) {
    console.log("le nom n'est pas valide");
    document.getElementById("small_nom").style.display = "block";
    document.getElementById("last").style.border = "red 3px solid";
    document.getElementById("first").style.color = "red ";
  } else {
    console.log('le nom est valide')
    document.getElementById("small_nom").style.display = "none";
    document.getElementById("last").style.border = "green 3px solid";
    document.getElementById("last").style.color = "green ";
   
  }
};




//fonction pour valider le nom de famille
/*
function validateNameInput(last) {
  console.log("validate  name", .length);
  if (firstname.length < 3)  {
    console.log("entrer un prénom valide");
    //faire apparaitre le messge d'erreur
    document.getElementById("small_text").style.display = "block";
    document.getElementById("first").style.border = "red 3px solid";
    
  

    // 
  } else if (firstname.length > 2) {
    document.getElementById("first").style.color = "green";
    document.getElementById("first").style.border = "lightGreen 3px solid";
    document.getElementById("small_text").style.display = "none";
  }

}*/


//je rentre les informations pour vérifier si c'est un nom valide a l'aide de la fonction validateNameInput
/*
function validateNameInput(name) {
  console.log("validate Name", nom.length);

  if (name.length < 3) {
    console.log("message d'erreur"){
      //faire apparaitre un message d'erreur
    } else {
      //effacer me message
    }
  }

  
}

*/





//je selectionne les donnees du champ avec son id first
var firstNameInput = document.getElementById("first");
firstNameInput.addEventListener("input", function () {
  validateFirstNameInput(firstNameInput);
});

// je rentre les informations pour vérifier le Nom
/*
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
});*/

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

//fermeture de la modale 
closeModale.addEventListener('click', closeModal);

// parti 
partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var textPrenom = prenom.value;
  validateFirstNameInput(textPrenom);
  //
  var textNom = nom.value;
  validateLastNameInput(textNom);

});
/*
partiBtn.addEventListener('click', function (event) {
  
  var textNom = nom.value;
  validateLastNameInput(textNom);
})*/



/*
function checkFormCompletion() {
  if (surname.value && lastName.value && email.value && birth.value && quantity.value) {
    alert('merci');
    form.reset();
    form.style.display = 'none'
  }
}*/
