import { autoSelectPlan, defaultRadioPlan } from "../utils/defFunctions.js";
import { sendForm } from "./sendForm.js";

export const openModalBuy = () => {
    const modal         = document.querySelector('.modal'),
          modalBtnClose = document.querySelector('.modal__close'),
          btnsModalBuy  = document.querySelectorAll('.btn-buy-now'),
          modalRadio    = document.querySelectorAll('.modal__radio'),
          pricingPrice  = document.querySelectorAll('.pricing-price'),
          modalBody     = document.querySelector('.modal__body'),
          btnSubmut     = document.querySelector('#btn-submit');

    const closeModal = () => {
        modal.classList.remove('modal--open');
        document.body.style.overflow = '';
        window.removeEventListener('click', closeModal);
    };

    const openModal  = (btn) => {
        modal.classList.add('modal--open');
        autoSelectPlan(modalRadio, btn);
        if(!btn.dataset.btnPlan) defaultRadioPlan(modalRadio, pricingPrice);
        document.body.style.overflow = 'hidden';
        window.addEventListener('click', closeModal);
    };

    modalBody.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    btnsModalBuy.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(btn);
        });
    });

    modalBtnClose.addEventListener('click', closeModal);

    btnSubmut.addEventListener('click', (e) => {
        e.preventDefault();
        sendForm(closeModal);
    })
}