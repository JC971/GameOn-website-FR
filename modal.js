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

const maxDate = new Date();


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
    //le prénom doit obligatoirement avoir plus de deux caractères
    // et que si il n'y a pas que des lettres en minuscules ou majuscule
  if (firstname.length < 3 || !/^[a-zA-Z]+$/.test(firstname))  {
    console.log("entrer un prénom valide");

    //faire apparaitre le messge d'erreur
    document.getElementById("small_text").style.display = "block";

    // pour souligner l'erreur je mets les bordures en rouge
    document.getElementById("first").style.border = "red 3px solid";

    // le texte est lui aussi en rouge
    document.getElementById("first").style.color = "red ";
  // si les conditions du dessus ne sont pas remplies alors

  } else if (firstname.length > 2) {
    // le message d'erreur n'apparait plus
    document.getElementById("small_text").style.display = "none";
    // l'écriture apparait en couleur verte
    document.getElementById("first").style.color = "green ";
    // la bordure apparait de couleur verte
    document.getElementById("first").style.border = "lightGreen 3px solid";
    
  }
};

//je crée une fonction validateLastNameInput qui me sert à vérifier si le nom entré est valide

function validateLastNameInput(lastname) {
  console.log('validate lastname', lastname.length);
    // si le nom ne contient pas plus de 2 lettre alors le champ ne sera pas validé
  if (lastname.length < 3) {
    console.log("le nom n'est pas valide");
    // je fais apparaitre un message d'erreur
    document.getElementById("small_nom").style.display = "block";
    // la bordure sera de couleur rouge
    document.getElementById("last").style.border = "red 3px solid";
    // l'écriture sera elle aussi en rouge
    document.getElementById("first").style.color = "red ";
    // si le nom contient plus de deux lettres alors

  } else {
    console.log('le nom est valide')
    //le message d'erreur disparait 
    document.getElementById("small_nom").style.display = "none";
    //les bordures sont de couleur verte
    document.getElementById("last").style.border = "green 3px solid";
    // les lettres sont vertes aussi
    document.getElementById("last").style.color = "green ";
    
   
  }
};

//function validaEmailInput(email)

function validateEmailInput(email) {
    
  var pattern = /^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/
    // pattern.test que les valeurs qui vont être donner correspondent bien au valeurs de var pattern
  if (pattern.test(email)) {
    console.log("valid email address");
    // la couleur des écritures est verte
    document.getElementById("email").style.color = "green";
    // pas de message d'erreur
    document.getElementById("error-email").style.display = "none";
    // bordure du bouton verte
    document.getElementById("email").style.border = "green 3px solid";

  } else {
    console.log("invalid email address");
    // si c'est pas le cas alors: écriture en rouge
    document.getElementById("email").style.color = "red";
    // message d'erreur apparait 
    document.getElementById("error-email").style.display = "block";
    // bordure du bouton rouge
    document.getElementById("email").style.border = "red 3px solid";
  }
};

//Champ date de naissance. la fonction est :validDate

function validDate(dateString) {
  // si les données ne sont pas conforment à la chaine de caractère date alors
  if (!dateString){
    console.log('pas de données ');
    // l'affichage d'un message d'erreur apparait
    document.querySelector(".no-date").style.display = "block";

    //
    
    
    //
  } else {
    // le message d'erreur n'est plus utile
    document.querySelector('.no-date').style.display = 'none';

    document.getElementById("birthdate").style.color = "green";
    
    
  }
};


// nombre de tournois 
var numberInput = document.getElementById("quantity");
function validateTournois(param) {
  if (param === ""|| param >30) {
    // affcher un message d'erreur bordure rouge
    document.getElementById("quantity").style.borderColor = "red";
    // erreur si nombre depasse les 30 
    document.getElementById("quantity").style.color = "red";
    //affichage d'un message d'erreur
document.getElementById("nombre-invalide").style.display="block"
    

  } else {
    //quand le nombre entré est correct les bordures sont vertes
    document.getElementById("quantity").style.borderColor = "green";
    document.getElementById("quantity").style.color = "green";
    // on cache le message d'erreur
    document.getElementById("nombre-invalide").style.display = "none";
    }

  };

// les  conditions d'utilisation
function validate() {
    // si la case n'est pas cochée
  if (!document.getElementById("checkbox1").checked) {
    // une alerte est envoyée et bloque la soumission
    alert("Acceptez les conditions d'utilisation avant de valider.");
    console.log('c pas bon du toutu');
   
  }
  // si la case est cochée la fonction renvoie true le formulaire est soumi
  return true;
  
};

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

});









