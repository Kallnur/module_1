import { sendForm } from "./sendForm.js";

export const openModalBuy = () => {
    const modal         = document.querySelector('.modal'),
          modalBtnClose = document.querySelector('.modal__close'),
          btnsModalBuy  = document.querySelectorAll('.btn-buy-now'),
          modalRadio    = document.querySelectorAll('.modal__radio'),
          btnSubmut     = document.querySelector('#btn-submit');

    const openModal  = (btn) => {
        modal.classList.add('modal--open');
        modalRadio.forEach(inpData => {
            if(btn.dataset.btnPlan === inpData.dataset.radioPlan) inpData.checked = true;
            if(!btn.dataset.btnPlan) modalRadio[modalRadio.length - 1].checked = true;
        })
    };

    const closeModal = () => modal.classList.remove('modal--open');

    btnsModalBuy.forEach(btn => {
        btn.addEventListener('click', () => openModal(btn));
    });

    modalBtnClose.addEventListener('click', closeModal);

    btnSubmut.addEventListener('click', (e) => {
        e.preventDefault();
        sendForm();
    })
}