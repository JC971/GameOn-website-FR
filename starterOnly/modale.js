
document.addEventListener('DOMContentLoaded', () => {
  // Sélection des éléments du formulaire
  const modalbg = document.querySelector('.bground');
  const partiBtn = document.querySelector('#parti');
  const prenom = document.querySelector('#first');
  const nom = document.querySelector('#last');
  const modalBtn = document.querySelector('#inscritBtn');
  const modaleBtn = document.querySelector('#secondInscritBtn');
  const closeModale = document.querySelector('#closeModale');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const message = document.querySelector('.message');
  const myform = document.getElementById('myform');
  const quantity = document.getElementById('quantity');
  const checkbox1 = document.getElementById('checkbox1');
  const choixVille = document.querySelector('.choix-ville');
  const accept = document.querySelector('.accept');
  const smallText = document.getElementById("small_text");
  const smallNom = document.getElementById('small_nom');
  const underAge = document.querySelector('.no-date');
  //const btnCloseConfirm = document.querySelector('#close-Confirm');
  const fermer = document.getElementById('close-confirm');
  
  
  function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      
      x.className += " responsive";
    } else {
      x.className = "topnav";
    };
    
  }
  
  // Fonction pour lancer la modale
  const launchModal = () => {
    modalbg.style.display = 'block';
  };
  
  // Fonction pour fermer la modale
  const closeModal = () => {
    modalbg.style.display = 'none';
  };
  
  // Validation du prénom
  const validateFirstNameInput = (firstname) => {
    if (firstname.length < 2 || !/^[a-zA-ZÀ-ú-]+$/.test(firstname)) {
      smallText.style.display = "block";
      prenom.classList.add('invalid-border');
      return false;
    } else {
      prenom.classList.add('valid-border');
      prenom.classList.remove('invalid-border');
      smallText.style.display = "none";
      return true;
    }
  };
  
  // Validation du nom
  const validateLastNameInput = (lastname) => {
    if (lastname.length < 2 || !/^[a-zA-ZÀ-ú-]+$/.test(lastname)) {
      nom.classList.add('invalid-border');
      smallNom.style.display = 'block';
      return false;
    }
    nom.classList.add('valid-border');
    smallNom.style.display = 'none';
    nom.classList.remove('invalid-border');
    return true;
  };
  
  // Validation de l'e-mail
  const validateEmailInput = (emailValue) => {
    let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (pattern.test(emailValue)) {
      email.classList.add('valid-border');
      email.classList.remove('invalid-border');
      accept.style.display = 'none';
      return true;
    }
    email.classList.add('invalid-border');
    accept.style.display = 'block';
    return false;
  };
  
  // Validation de la date de naissance
  const validateDateOfBirth = (dateString) => {
    const birthdate = document.getElementById('birthdate');
    const underAgeMessage = document.querySelector('.no-date');
    
    // Vérifie si la date de naissance est vide
    if (!dateString) {
      birthdate.classList.add('invalid-border');
      underAgeMessage.style.display = 'none'; // Masque le message d'âge invalide
      return false;
    }
    
    const dobTimestamp = new Date(dateString).getTime();
    const currentTimestamp = new Date().getTime();
    const ageInMilliseconds = currentTimestamp - dobTimestamp;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    
    // Vérifie si l'utilisateur a moins de 18 ans
    if (ageInYears < 18) {
      birthdate.classList.add('invalid-border');
      underAgeMessage.style.display = 'block'; // Affiche le message d'âge invalide
      return false;
    }
    
    // La date de naissance est valide
    birthdate.classList.add('valid-border');
    birthdate.classList.remove('invalid-border');
    underAgeMessage.style.display = 'none'; // Masque le message d'âge invalide
    return true;
  };
  
  
  // Validation du nombre de tournois
  
  const validateTournois = (param) => {
    const quantity = document.getElementById('quantity');
    const nombreInvalide = document.getElementById('nombre-invalide');
    if (param === "" || param > 30 || param < 0) {
      quantity.classList.add('invalid-border');
      nombreInvalide.style.display = 'block';
      return false;
    }
    quantity.classList.remove('invalid-border');
    quantity.classList.add('valid-border');
    nombreInvalide.style.display = 'none';
    return true;
  };
  
  // Validation du choix de la ville
  const validateCitySelection = () => {
    if (!document.querySelector('input[name="location"]:checked')) {
      choixVille.style.display = 'block';
      return false;
    }
    choixVille.style.display = 'none';
    return true;
  };
  
  // Validation des conditions d'utilisation
  const validateTerms = () => {
    if (!checkbox1.checked) {
      accept.style.display = 'block';
      return false;
    }
    accept.style.display = 'none';
    return true;
  };
  
  // Validation du formulaire complet
  const isValidForm = () => {
    const textPrenom = prenom.value;
    const textNom = nom.value;
    const textEmail = email.value;
    const textBirth = birthdate.value;
    const textTournoi = quantity.value;
    
    return (
      validateFirstNameInput(textPrenom) &&
      validateLastNameInput(textNom) &&
      validateEmailInput(textEmail) &&
      validateDateOfBirth(textBirth) &&
      validateTournois(textTournoi) &&
      validateCitySelection() &&
      validateTerms()
      );
    };
    
    // Événement au clic sur le bouton "C'est parti"
    partiBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (isValidForm()) {
        myform.style.display = 'none';
        message.style.display = 'block';
      }
    });
    
    // Événement de soumission du formulaire
    myform.addEventListener('submit', (event) => {
      if (!isValidForm()) {
        event.preventDefault();
      }
    });
    
    
    // Lancement de la modale en cliquant sur les boutons
    modalBtn.addEventListener("click", launchModal);
    modaleBtn.addEventListener("click", launchModal);
    
    // Fermeture de la modale
    closeModale.addEventListener('click', closeModal);
    
    // fermeture à l'aide du bouton close confirm
    fermer.addEventListener("click", () => {
      modalbg.style.display = 'none';
    });
    
    
    //
  });
  