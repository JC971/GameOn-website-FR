// DOM Elements
const modalbg = document.querySelector(".bground");
const partiBtn = document.querySelector("#parti");
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const modalBtn = document.querySelector("#inscritBtn");
const modaleBtn = document.querySelector("#secondInscritBtn");
const closeModale = document.querySelector("#closeModale");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const email = document.getElementById("email");
//const fillMail = document.querySelector('.email-vide');
const naissance = document.getElementById('birthdate');
const date = document.querySelector(".no-date");
const myform = document.getElementById("myform");
const nbreTournoi = document.getElementById("quantity");
const condition = document.getElementById('checkbox1');
const ville = document.querySelector('.ville-choix');


const maxDate = new Date();


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};


// Fonction pour lancer la modale
function launchModal() {
  //on change le comportement de la modale qui etait en mode display none pour le passer en mode display block
  modalbg.style.display = "block";
}

//fonction pour fermer la modale
function closeModal() {
  modalbg.style.display = "none";
};

//je rentre les informations pour vérifier si c'est un prénom valide a l'aide de la fonction validateFirstNameInput

function validateFirstNameInput(firstname) {
  console.log("validate first name", firstname.length);
    //le prénom doit obligatoirement au moins deux caractères
    // dans le prénom doivent apparaitre que des lettre en minuscules ou majuscules et -
  if (firstname.length < 2 || !/^[a-zA-Z-]+$/.test(firstname))  {
    console.log("entrer un prénom valide");

    //Si ce n'est pas le cas faire apparaitre le messge d'erreur
    document.getElementById("small_text").style.display = "block";

    // pour souligner l'erreur je mets les bordures en rouge
    document.getElementById("first").style.border = "red 3px solid";

    // le texte est lui aussi en rouge
    document.getElementById("first").style.color = "red ";
  // si les conditions du dessus ne sont pas remplies alors

  } else if (firstname.length >1) {
    // le message d'erreur n'apparait plus
    document.getElementById("small_text").style.display = "none";
    // la bordure apparait de couleur verte
    document.getElementById("first").style.border = "lightGreen 3px solid";
    //l'écriture passe en blanc
    document.getElementById("first").style.color = "white ";
    // la couleur de fond passe en vert
    document.getElementById("first").style.backgroundColor = "green "; 
    return true;
  }
};

//je crée une fonction validateLastNameInput qui me sert à vérifier si le nom entré est valide

function validateLastNameInput(lastname) {
  console.log('validate lastname', lastname.length);
    // si le nom ne contient pas plus de 2 lettre alors le champ ne sera pas validé
  if (lastname.length < 2 || !/^[a-zA-Z]+$/.test(lastname)) {
    console.log("le nom n'est pas valide");
    // je fais apparaitre un message d'erreur
    document.getElementById("small_nom").style.display = "block";
    // la bordure sera de couleur rouge
    document.getElementById("last").style.border = "red 3px solid";
    // l'écriture sera elle aussi en rouge
    document.getElementById("first").style.color = "red ";
    // si le nom contient plus de deux lettres alors
    // supprimer le message incitatif 
    document.querySelector('.email-vide')

  } else {
    console.log('le nom est valide')
    //le message d'erreur disparait 
    document.getElementById("small_nom").style.display = "none";
    //les bordures sont de couleur blanche
    document.getElementById("last").style.border = "lightGreen 3px solid";
    // les lettres sont vertes aussi
    document.getElementById("last").style.color = "white ";
     // la couleur de fond passe en vert
     document.getElementById("last").style.backgroundColor = "green";
   
  }
};

//function validaEmailInput(email)

function validateEmailInput(email) {
    
  var pattern =  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    // pattern.test que les valeurs qui vont être donner correspondent bien au valeurs de var pattern
  
  if (pattern.test(email)) {
    console.log("valid email address");
    // la couleur des écritures est blanche
    document.getElementById("email").style.color = "white";
    // bordure du bouton verte
    document.getElementById("email").style.border = "lightGreen 3px solid";
    //la couleur de fond en vert
    document.getElementById('email').style.backgroundColor = 'green';

    // pas de message d'erreur car le mail est correct
    document.getElementById("error-email").style.display = "none";
    
  // l'email n'est pas vide donc ce message d'erreur n'apparait plus
    document.querySelector('.email-vide').style.display = 'none';


  } else {
    console.log("invalid email address");
    // si c'est pas le cas alors: écriture en rouge
    document.getElementById("email").style.color = "red";
    // message d'erreur apparait 
    document.getElementById("error-email").style.display = "block";
    // bordure du bouton rouge
    document.getElementById("email").style.border = "red 3px solid";
    document.querySelector('.email-vide').style.display = 'none';
  }
};

//Champ date de naissance. la fonction est :validDate

function validDate(dateString) {
  // si les données ne sont pas conforment à la chaine de caractère date alors
  if (!dateString){
    console.log('pas de données ');
    // l'affichage d'un message d'erreur apparait
    document.querySelector(".no-date").style.display = "block";
    document.querySelector(".no-date").style.color = "red";
    document.getElementById('birthdate').style.border = "red 3px solid";

  } else {
    // le message d'erreur n'est plus utile
    document.querySelector('.no-date').style.display = 'none';

    // la couleur de fond apparait en blanc
    document.getElementById("birthdate").style.color = "white";
    // la bordure apparait en vert avec une bordure de 3px
    document.getElementById('birthdate').style.border = "lightGreen 3px solid";
    // la couleur de fond apparait en vert
    document.getElementById('birthdate').style.backgroundColor = "green";
    
    
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
    document.getElementById('quantity').style.border = "lightGreen 3px solid";
    document.getElementById("quantity").style.backgroundColor = "green";
    document.getElementById("quantity").style.color = "white";
    // on cache le message d'erreur
    document.getElementById("nombre-invalide").style.display = "none";
    }

};
  //

// Parcours de tous les boutons radio

function isRadioButtonSelected() {
  var radioButtons = document.getElementsByName('location');
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      console.log('vous avez bien choisi une ville');
      document.querySelector('.choix-ville').style.display = "none";
      return true;
      
    } else {
      console.log("entrez le nom d'une ville");
      document.querySelector('.choix-ville').style.display = "block";
      
    }
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

// parti prénom
partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var textPrenom = prenom.value;
  console.log("le prénom est", textPrenom);
  validateFirstNameInput(textPrenom);
  //nom de famille
  var textNom = nom.value;
  console.log('nom', textNom);
  validateLastNameInput(textNom);
//e-mail
  var textemail = email.value;
  console.log('la valeur pour mail', textemail);
  validateEmailInput(textemail);
// nombre de tournois
  var texttounoi = quantity.value;
  console.log('le nombre de tournois', texttounoi);
  validateTournois(texttounoi);

});
// date anniversaire
partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var textDate = birthdate.value;
  console.log("la date d'anniversaire", textDate);
  validDate(textDate);
});

// 
partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var textValidation = checkbox1.value;
  validate(textValidation)

});

//boutons radio
partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var textLocation = location.value;
  isRadioButtonSelected(textLocation)
});


// fermer le formulaire

document.getElementById("myform").addEventListener("submit", function () {
  alert("message envoyé")
});
  





// Sélectionnez le bouton ou le formulaire que vous souhaitez écouter
//var button = document.getElementById("myButton");

// Ajoutez un événement de clic sur le bouton ou le formulaire
//button.addEventListener("click", function(event) {
  //event.preventDefault(); // Empêche la page de recharger lors de la soumission du formulaire
  //if (isRadioButtonSelected()) {
   // console.log("Un bouton radio est sélectionné.");
  //} else {
    //console.log("Aucun bouton radio n'est sélectionné.");
 // }
//});
