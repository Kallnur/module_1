import { validStr } from "../utils/defFunctions.js";

export const sendForm = () => {
    const userName   = document.querySelector('#form-name'),
          userEmail  = document.querySelector('#form-email'),
          checkboxes = document.querySelectorAll('.modal__checkbox'),
          modal      = document.querySelector('.modal'),
          modalBody  = document.querySelector('.modal__body'),
          checkboxBlockTxt = document.querySelector('.modal__checkbox-block-txt');

    validStr(userName.value, userName);
    validStr(userEmail.value, userEmail);
    const checkbox = [];

    checkboxes.forEach(check => {
        if(check.checked) checkbox.push(check); 
    });
    if(!checkbox.length) {
        checkboxBlockTxt.classList.add('modal__checkbox-warn')
        return false
    }

    if(userEmail.value.length > 2 && userName.value.length > 2 && checkbox.length){
        const userPlan         = document.querySelector('.modal__radio:checked'),
              selectedCheckbox = [];
        checkbox.forEach(check => selectedCheckbox.push(check.dataset.socialNetworks)) 
        modalBody.classList.add('modal__body--loading');
        setTimeout(() => {
            console.log({
                name: userName.value,
                email: userEmail.value,
                checkbox: selectedCheckbox,
                plan: userPlan.dataset.radioPlan
            });
            userEmail.value = ''; userName.value = '';
            modal.classList.remove('modal--open');
            modalBody.classList.remove('modal__body--loading');
            checkboxBlockTxt.classList.remove('modal__checkbox-warn')
        }, 2000)
    }else console.log('FORM NO VALID');
};