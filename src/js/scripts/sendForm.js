import { validStr } from "../utils/defFunctions.js";

export const sendForm = (closeModal) => {
    const userName   = document.querySelector('#form-name');
    const userEmail  = document.querySelector('#form-email');
    const checkboxes = document.querySelectorAll('.modal__checkbox');
    const modal      = document.querySelector('.modal');
    const modalBody  = document.querySelector('.modal__body');
    const checkboxBlockTxt = document.querySelector('.modal__checkbox-block-txt');

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

    // Ultra Pro Max Validation

    if(userEmail.value.length > 2 && userName.value.length > 2 && checkbox.length){  
        const userPlan         = document.querySelector('.modal__radio:checked + label > span'),
              selectedCheckbox = [];

        checkbox.forEach(check => selectedCheckbox.push(check.dataset.socialNetworks)) 
        modalBody.classList.add('modal__body--loading');

        setTimeout(() => {
            console.log({
                name: userName.value,
                email: userEmail.value,
                checkbox: selectedCheckbox,
                plan: userPlan.textContent
            });

            closeModal();
            userEmail.value = ''; userName.value = '';
            modal.classList.remove('modal--open');
            modalBody.classList.remove('modal__body--loading');
            checkboxBlockTxt.classList.remove('modal__checkbox-warn');
            
        }, 2000)
    }else console.log('FORM NO VALID');
};