import { validStr } from "../utils/defFunctions.js";

export const sendForm = () => {
    const userName   = document.querySelector('#form-name'),
          userEmail  = document.querySelector('#form-email'),
          checkboxes = document.querySelectorAll('.modal__checkbox'),
          modal      = document.querySelector('.modal'),
          modalBody   = document.querySelector('.modal__body'),
          isValid = false;
    
    validStr(userName.value, userName);
    validStr(userEmail.value, userEmail);
    const checkbox = [];

    checkboxes.forEach(check => {
        if(check.checked) checkbox.push(check); 
    });
    if(!checkbox.length) {
        alert('How did you know about our app?')
        return false
    }

    if(userEmail.value.length > 2 && userName.value.length > 2 && checkbox.length){
        modalBody.classList.add('modal__body--loading');
        console.log('IS Valid!');
        setTimeout(() => {
            userEmail.value = ''; userName.value = '';
            modal.classList.remove('modal--open');
            modalBody.classList.remove('modal__body--loading');
        }, 2000)
    }else console.log('IS FORM NO VALID');
};