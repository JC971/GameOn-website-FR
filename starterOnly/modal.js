 function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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
    const acceptCond = document.querySelector('.accept-conditions');
    const smallText = document.getElementById("small_text");
    const smallNom = document.getElementById('small_nom');
    //const btnCloseConfirm = document.querySelector('#close-Confirm');
    const fermer = document.getElementById('close-confirm');
    const radioButtons = document.querySelectorAll('input[name="location"]');
    
    
    // Fonction pour lancer la modale
    const launchModal = () => {
        modalbg.style.display = 'block';
    };
    
    // Fonction pour fermer la modale
    const closeModal = () => {
        modalbg.style.display = 'none';
    };
    
    // Formulaire
    
    // Validation du prénom
    //creation fonction pour récupérer le changement de valeur dans l'input
    prenom.addEventListener('input', () => { 
        validateFirstNameInput(prenom.value);
    })
    
    const validateFirstNameInput = (firstname) => {
        if (firstname===""||firstname.length < 2 || !/^[a-zA-ZÀ-ú-]+$/.test(firstname)) {
            smallText.style.display = "block";
            prenom.classList.add('invalid-border');
            prenom.classList.remove('valid-border');
            return false;
        } else {
            prenom.classList.add('valid-border');
            prenom.classList.remove('invalid-border');
            smallText.style.display = "none";
            return true;
        }
    };
    
    // l'input change avec le changement de valeur    
    
    nom.addEventListener('input', () => {
        validateLastNameInput(nom.value);
    });
    
    //fonction pour la validation du nom
    const validateLastNameInput = (lastname) => {
        if (lastname === "" || lastname.length < 2 || !/^[a-zA-ZÀ-ú-]+$/.test(lastname)) {
            nom.classList.add('invalid-border');
            nom.classList.remove('valid-border');
            smallNom.style.display = 'block';
            return false;
        } else { 
            nom.classList.add('valid-border');
            nom.classList.remove('invalid-border');
            smallNom.style.display = 'none';
            return true;
        }
    };
    
    //champ email--------------------------------
    email.addEventListener('input', () => {
        validateEmailInput(email.value)
    });
    
    const validateEmailInput = (emailValue) => {
        const errorMail=document.getElementById('error-email')
        
        let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (pattern.test(emailValue)) {
            email.classList.add('valid-border');
            email.classList.remove('invalid-border');
            errorMail.style.display = 'none';
            return true;
        }
        email.classList.add('invalid-border');
        email.classList.remove('valid-border');
        errorMail.style.display = 'block';
        return false;
    };
    
    
    // champ date anniversaire
    birthdate.addEventListener('input', () => {
        validateDateOfBirth(birthdate.value);
    });
    // Validation de la date de naissance
    const validateDateOfBirth = (dateString) => {
        const birthdate = document.getElementById('birthdate');
        const underAgeMessage=document.querySelector('.no-date')
        
        if (!dateString) {
            birthdate.classList.add('invalid-border');
            birthdate.classList.remove('valid-border');
            underAgeMessage.style.display = 'block'; 
            return false;
        }
        
        const dobTimestamp = new Date(dateString).getTime();
        const currentTimestamp = new Date().getTime();
        const ageInMilliseconds = currentTimestamp - dobTimestamp;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
        
        // Vérifie si l'utilisateur a moins de 18 ans
        if (ageInYears < 18) {
            birthdate.classList.add('invalid-border');
            birthdate.classList.remove('valid-border');
            underAgeMessage.style.display = 'block'; // Affiche le message d'âge invalide
            return false;
        }
        
        // La date de naissance est valide
        birthdate.classList.add('valid-border');
        birthdate.classList.remove('invalid-border');
        underAgeMessage.style.display = 'none'; // Masque le message d'âge invalide
        return true;
    };
    
    // 
    quantity.addEventListener('input', () => {
        validateTournois(quantity.value);
    });
    
    // Validation du nombre de tournois
    
    const validateTournois = (param) => {
        const quantity = document.getElementById('quantity');
        const nombreInvalide = document.getElementById('nombre-invalide');
        if (param === "" || param > 100 || param < 0) {
            quantity.classList.add('invalid-border');
            quantity.classList.remove('valid-border');
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
    
    // Ajout des écouteurs d'événements pour tous les boutons radio
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', validateCitySelection);
});

    // Validation des conditions d'utilisation
checkbox1.addEventListener('input', () => {
    validateTerms();
});
    const validateTerms = () => {
        if (!checkbox1.checked) {
            acceptCond.style.display = 'block';
            return false;
        }
        acceptCond.style.display = 'none';
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
            } else {
                validateLastNameInput(nom.value);
                validateEmailInput(email.value);
                validateDateOfBirth(birthdate.value);
                validateTournois(quantity.value);
                validateCitySelection();
                validateTerms()
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
        document.getElementById('close-confirm').addEventListener('click', function() {
            console.log('Bouton Fermer cliqué');
        });
        
    });
    