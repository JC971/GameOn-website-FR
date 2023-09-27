// DOM Eleme#

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
const naissance = document.getElementById('birthdate');
const date = document.querySelector(".no-date");
const myform = document.getElementById("myform");
const nbreTournoi = document.getElementById("quantity");
const condition = document.getElementById('checkbox1');
const accepte = document.querySelector('accept');
const villeChoix = document.querySelector('.ville-choix');
const message = document.querySelector(".message");
const ville = document.querySelector('input[name="location"]:checked');
const maxDate = new Date();
const btnCloseConfirm = document.getElementById("close-confirm");
const elementsWithError = document.querySelectorAll('.formData[data-error-visible="true"] .text-control');




function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

};

// Fonction pour lancer la modale
const launchModal = () => {
  modalbg.style.display = 'block';
};

// Fonction pour fermer la modale
const closeModal = () => {
  modalbg.style.display = 'none';
};



function validateField(inputField, validationRegex, errorElement) {
  const value = inputField.value.trim();
  const isValid = validationRegex.test(value);

  if (!isValid) {
    errorElement.style.display = 'block';
    inputField.style.border = 'solid 2px red';
  } else {
    errorElement.style.display = 'none';
    inputField.style.border = 'solid 2px green';
  }

  return isValid;
}




// ---------------Fonction pour lancer la modale----------------
/*
function launchModal() {
  //on change le comportement de la modale qui etait en mode display none pour le passer en mode display block
  modalbg.style.display = "block";
};

//fonction qui sert à fermer la modale
function closeModal() {
  modalbg.style.display = "none";
};

//------------------------prénom--------------------------------------

//je rentre les informations pour vérifier si c'est un prénom valide a l'aide de la fonction validateFirstNameInput
function validateFirstNameInput(firstname) {
  console.log("validate first name", firstname.length);
    //le prénom doit obligatoirement au moins deux caractères
    // dans le prénom doivent apparaitre que des lettre en minuscules ou majuscules et - et les accents
  if (firstname.length < 2 || !/^[a-zA-ZÀ-ú-]+$/.test(firstname))  {
   
  //Si le prénom contient moins de 2 caractères ou que les caractères ne correspondent pas à l'expression régulière
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
    document.getElementById("first").style.border = "green 5px solid";
    //Ecriture verte
    document.getElementById("first").style.color = "green ";

    return true;
  }
};

// -----------------nom--------------------------------------------

//je crée une fonction validateLastNameInput qui me sert à vérifier si le nom entré est valide

function validateLastNameInput(lastname) {
  
    // si le nom ne contient pas plus de 2 lettre ou que les caractères sont différents du regex alors le champ ne sera pas validé
  if (lastname.length < 2 || !/^[a-zA-ZÀ-ú-]+$/.test(lastname)) {
   
    // je fais apparaitre un message d'erreur
    document.getElementById("small_nom").style.display = "block";
    // la bordure sera de couleur rouge
    document.getElementById("last").style.border = "red 3px solid";
    // l'écriture sera elle aussi en rouge
    document.getElementById("first").style.color = "red ";
    
  } else {
    
    //le message d'erreur disparait 
    document.getElementById("small_nom").style.display = "none";
    //les bordures sont de couleur verte
    document.getElementById("last").style.border = "green 5px solid";
    document.getElementById("last").style.color = "green";

    return true;
  }
};
*/
// ---------------------e-mail------------------------------------------------

//function validaEmailInput(email)

function validateEmailInput(email) {
    // regular expression pour les lettres de a à z en minuscules et majuscules plus -
  let pattern =  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
  if (pattern.test(email)) {
// si les valeurs testées dans la pattern correspondent alors
    
    // bordure du bouton verte
    document.getElementById("email").style.border = "green 5px solid";
    //le texte sera écrit en vert
    document.getElementById("email").style.color = "green";
    // pas de message d'erreur car le mail est correct
    document.getElementById("error-email").style.display = "none";
    
  // Et que le champ n'est pas vide le message indiquant le champ vide n'est pas affiché
    document.querySelector('.email-vide').style.display = 'none';
    return true;

  } else {
    //dans le cas contraire 
    
    //le texte sera affiché en rouge
    document.getElementById("email").style.color = "red";
    // message d'erreur apparait 
    document.getElementById("error-email").style.display = "block";
    // bordure du bouton rouge
    document.getElementById("email").style.border = "red 3px solid";
   // pas necéssaire de message email vide 
    document.querySelector('.email-vide').style.display = 'none';
  }
};

// ------------------date----de naissance-------------------------------------

//function validation de la date
function validDate(dateString) {
  // Calculer l'âge à partir de la date de naissance
  let age = (new Date().getTime() - new Date(dateString).getTime()) / (1000 * 60 * 60 * 24 * 365);

  // je vérifie si l'âge est égal ou supérieur à 18 ans ou que l'age n'est pas renseigné
  if (age < 18 || !dateString) {
    // si les données ne sont pas conforment à la chaine de caractère date alors
    // Et si l'âge est inférieur à 18 ans
    // je me sers de ma balise no-date pour faire apparaitre un message ...
    document.querySelector('.no-date').style.display = 'block';
    // je stylise la bordure
    document.getElementById('birthdate').style.border = 'red 3px solid';
    //la couleur d'écriture en rouge 
    document.getElementById("birthdate").style.color = "red";

  } else {

    // Masquer le message d'erreur si l'âge est égal ou supérieur à 18 ans
    document.querySelector('.no-date').style.display = 'none'
    // Les caractères sont en vert
    document.getElementById("birthdate").style.color = "green";
    // la bordure de couleur verte
    document.getElementById("birthdate").style.border = "green 5px solid"
    
    return true;

  }
};

// ------------------------tournois--------------------------------------
  
// nombre de tournois

let numberInput = document.getElementById("quantity");

function validateTournois(param) {
  if (param === "" || param > 30 || param < 0) {
    // Si le nombre de tournois n'est pas renseigné, dépasse les 30 tournois ou est négatif,
    // la bordure du champ quantity passe au rouge
    document.getElementById("quantity").style.borderColor = "red";
    // La couleur d'écriture est en rouge
    document.getElementById("quantity").style.color = "red";
    // J'affiche un message d'erreur nombre invalide
    document.getElementById("nombre-invalide").style.display = "block";
    // La couleur de fond du bouton est blanche
    document.getElementById("quantity").style.backgroundColor = "white";
    return false;
  } else {
    // Quand le nombre entré est valide (inférieur ou égal à 30 et positif),
    // les bordures sont vertes
    document.getElementById('quantity').style.border = "green 5px solid";
    // La couleur des caractères est verte
    document.getElementById('quantity').style.color = "green";
    // On cache le message d'erreur
    document.getElementById("nombre-invalide").style.display = "none";
    return true;
  }
};

//-------------------------------- villes--------------------------------------

// boutons radio
// la variable citySelected va me permettre de déterminer si une ville a été coché ou pas
let citySelected = false;
// j'ajoute un adeventlistener au formulaire myForm qui sera déclenché au click sur un bouton radio

myform.addEventListener('click', function (e) {
    if (e.target.type == 'radio') {
      console.log('radio touché')
      // si un bouton radio est touché alors pas de message d'erreur
      document.querySelector('.choix-ville').style.display = "none";
        citySelected = true
    } else {
      // si c'est pas le cas un message d'erreur sera déclencher
      document.querySelector('.choix-ville').style.display = "block";
    }
});

//---------------conditions d'utilisation------------------------------

// les  conditions d'utilisation
function validate() {
  if (!document.getElementById("checkbox1").checked) {
// si la case n'est pas cochée et que le bouton n'est pas vérifié
// une alerte est envoyée demandant d'accepter les conditions et remplace l'incitation à accepter les conditions
    document.querySelector('.accept').style.display = 'block';
    document.querySelector('.accept-conditions').style.display = 'none';
    
  }else{ 
  // si la case est cochée la fonction renvoie true le formulaire est soumi
    return true;
  }
};

// Lancement de la modale on recupere le bouton de l'id je m'inscris pour pouvoir l'ouvrir

modalBtn.addEventListener("click", launchModal);
//avec largeur supérieure à 800px
modaleBtn.addEventListener("click", launchModal);

//fermeture de la modale 
closeModale.addEventListener('click', closeModal);


//---------------------véification de tous les champs-------------------

// version flèche

const isValidForm=()=>{

  let textPrenom = prenom.value;
  const r1 = validateFirstNameInput(textPrenom);
  
  let textNom = nom.value;
  const r2 = validateLastNameInput(textNom);
 
  let textemail = email.value;
  const r3 = validateEmailInput(textemail);

  let textDate = birthdate.value;
  const r4 = validDate(textDate);

  let texttounoi = quantity.value;
  const r5 = validateTournois(texttounoi);
  
  let textValidation = checkbox1.value;
  const r7 = validate(textValidation);

  return r1 && r2 && r3 && r4 && r5 && r7 && citySelected;

};


//-------------- bouton parti pour envoyer le formulaire------------------------

partiBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (isValidForm()) {
    //faire disparaitre le formulaire et apparaitre la popup
    document.getElementById('myform').style.display = 'none';
    message.style.display = 'block';
    document.querySelector("#close-confirm").style.display = "block";

  } else {
    
  }
});

// ----------------------confirmation de l'envoie-----------------------

btnCloseConfirm.addEventListener('click', () => {
  // Au clic sur le bouton, la modale n'apparaît plus
  modalbg.style.display = 'none';
  });






