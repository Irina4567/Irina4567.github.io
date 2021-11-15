const modal = document.querySelector('.modal');
const showModal = document.querySelector('.button-show-modal');
const closeModal = modal.querySelector('.modal-close');
const login = modal.querySelector("[name=login]");
const email = modal.querySelector("[name=email]");
const report = modal.querySelector("[name=report]");
const form = modal.querySelector('form');

let isStorageLoginSupport = true;
let isStorageEmailSupport = true;
let strogeLogin="";
let strogeEmail="";

try {
    strogeLogin=localStorage.getItem("login");
} catch (err) {
    isStorageLoginSupport = false;
}

try {
    strogeEmail=localStorage.getItem("email");
} catch (err) {
    isStorageEmailSupport = false;
}

showModal.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-show');
    if (strogeLogin) {
        login.value = strogeLogin;
        if (strogeEmail) {
            email.value = strogeEmail;
        } else {
            email.focus();
        }
    } else {
        login.focus();
    }
    
});

closeModal.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modal.classList.remove('modal-error');
});

document.addEventListener('keydown',function(evt){
    if (evt.keyCode===27){
        modal.classList.remove('modal-show');
        modal.classList.remove('modal-error');
    }
});

form.addEventListener('submit', function(evt) {
    if (!login.value || !email.value || !report.value) {
        evt.preventDefault();
        modal.classList.add('modal-error');
        console.log('rere');
    } else {
        if (isStorageLoginSupport) {
            localStorage.setItem("login", login.value);
        }
        if (isStorageEmailSupport) {
            localStorage.setItem("email", email.value);
        }
    } 

});

