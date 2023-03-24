// DOM Elements
const modalbg = document.querySelector(".bground");
const partiBtn = document.querySelector("#parti");
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last")

const modalBtn = document.querySelector("#inscritBtn");
const modaleBtn = document.querySelector("#secondInscritBtn");


const closeModale = document.querySelector("#closeModale");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const email = document.getElementById("email");
const naissance = document.getElementById('birthdate')
const date =document.querySelector(".no-date")
const myform = document.getElementById("myform");
const nbreTournoi = document.getElementById("quantity");
const condition = document.getElementById('checkbox1');


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

//infos pour les emails
//function validaEmailInput(email)

function validateEmailInput(email) {
  var pattern = /^[^@\s]+@[^@\s]+\.[a-z]{2,3}$/;
  if (pattern.test(email)) {
    console.log("valid email address");
    document.getElementById("email").style.color = "green";
    document.getElementById("error-email").style.display = "none";


  } else {
    console.log("invalid email address");
    document.getElementById("email").style.color = "red";
    document.getElementById("error-email").style.display = "block";
  }
};

//Champ date de naissance

function validDate(dateString) {
  if (!dateString) {
    console.log('pas de données ')
    document.querySelector(".no-date").style.display="block"
  } else {
    document.getElementById("birthdate").style.color = "green";
    document.querySelector('.no-date').style.display = 'none';
    
  }
}

//date



// nombre de tournois 
var numberInput = document.getElementById("quantity");
function validateTournois(param) {
  if (param === ""|| param >30) {
    // affcher un message d'erreur bordur rouge
    document.getElementById("quantity").style.borderColor = "red";
    // erreur si nombre depasse les 30 
    

  } else {
    document.getElementById("quantity").style.borderColor = "green";
    }

  }


  ;
  
  
  /*
  if (isNaN(inputValue) || inputValue < 0 || inputValue > 30) {
    numberInput.setCustomValidity("Please enter a number between 0 and 10");
    console.log("Please enter a number between 0 and 10");
    document.getElementById("nombre-invalide").style.display = "block";
    document.getElementById("quantity").style.color = "red";
    alert("nombre incorrect")
  } else {
    numberInput.setCustomValidity("");
    document.getElementById("nombre-invalide").style.display = "none";
    document.getElementById("quantity").style.color = "green";
    
  }
});*/



// les  conditions d'utilisation


function validate() {
  if (!document.getElementById("checkbox1").checked) {
    alert("Acceptez les conditions d'utilisation avant de valider.");
    console.log('ok')
    //document.getElementById('checkbox1').style.display= "block"

  }
  // condition réalisée ...
  return true;
  
  
}


// Lancement de la modale on recupere le bouton de l'id je m'inscris pour pouvoir l'ouvrir

modalBtn.addEventListener("click", launchModal);
//avec largeur supérieure à 800px
modaleBtn.addEventListener("click", launchModal);

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
//
  var textemail = email.value;
  validateEmailInput(textemail);
//
  var texttounoi = quantity.value;
  console.log("variable texte tournoi",texttounoi);
  validateTournois(texttounoi);

});


partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var textDate = birthdate.value;
  validDate(textDate);
});

// reaction du bouton c'est parti à la non sélection des condditions d'utilisation
partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  
  var textValidation = checkbox1.value;
  validate(textValidation)

  // Add your validation code here
});


partiBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var textNumbre = document.getElementById('quantity');
  

  
});







