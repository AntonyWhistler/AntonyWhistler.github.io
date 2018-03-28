const signButton = document.getElementsByClassName('button');

// Form DOM elements
const EMAIL = document.getElementsByClassName('email');
const USERNAME = document.getElementsByClassName('username');
const FIRT_PASSWORD = document.getElementsByClassName('password-1');
const SECOND_PASSWORD = document.getElementsByClassName('password-2');

let emailValue, userName, firstPassword, secondPassword;
// Form Events
EMAIL[0].addEventListener('input', (e) => {
    emailValue = e.target.value;
});

USERNAME[0].addEventListener('input', (e) => {
    userName = e.target.value;
});

FIRT_PASSWORD[0].addEventListener('input', (e) => {
    firstPassword = e.target.value;
});

SECOND_PASSWORD[0].addEventListener('input', (e) => {
    secondPassword = e.target.value;
});

signButton[0].addEventListener('click', () => {
    let validation = false;
    let error = document.getElementsByClassName('error');
    let errorName = document.getElementsByClassName('error-name');
    let errorPassword = document.getElementsByClassName('error-password');
    let sucssessForm = document.getElementsByClassName('alert-success');

    if(emailValue == undefined) {
        validation = false;
        error[0].style.display = 'block'
    } else {
        validation = true;
        error[0].style.display = 'none'
    }

    if(userName == undefined) {
        validation = false;
        errorName[0].style.display = 'block';
    } else {
        validation = true;
        errorName[0].style.display = 'none';
    }

    if(+firstPassword !== +secondPassword) {
        validation = false;
        errorPassword[0].style.display = 'block'
    } else {
        validation = true;
    }

    if(validation) {
        errorName[0].style.display = 'none';
        error[0].style.display = 'none';
        errorPassword[0].style.display = 'none'

        sucssessForm[0].style.display = 'block';
    }
});