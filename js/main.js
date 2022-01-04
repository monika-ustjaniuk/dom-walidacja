console.log('Warsztat – Walidacja formularza zapisu do Newsletter’a');

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let textName = document.getElementById('name');
    let textEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (textName.value.trim() === '') {
        let liErrors = document.createElement('li');
        liErrors.innerText = 'Wpisz imie i nazwisko!';
        errors.appendChild(liErrors);
        
    }

    if (textEmail.value.trim() === '') {
        let liErrors = document.createElement('li');
        liErrors.innerText = 'Wpisz Adres E-mail!';
        errors.appendChild(liErrors);
        
    }

    if (!textName.value.includes('@')) {
        let liErrors = document.createElement('li');
        liErrors.innerText = 'Adres E-mail musi zawierac @!';
        errors.appendChild(liErrors);
        
    }

    if (!agree1.checked) {
        let liErrors = document.createElement('li');
        liErrors.innerText = 'Nie wyraziles zgody 1!';
        errors.appendChild(liErrors);
        

    }

    if (errors.children.length > 0) {
        event.preventDefault();
        
    }


    

    
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

   
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);
