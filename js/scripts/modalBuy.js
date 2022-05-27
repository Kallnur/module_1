import { autoSelectPlan, defaultRadioPlan } from "../utils/defFunctions.js";
import { sendForm } from "./sendForm.js";

export const openModalBuy = () => {
    const modal         = document.querySelector('.modal'),
          modalBtnClose = document.querySelector('.modal__close'),
          btnsModalBuy  = document.querySelectorAll('.btn-buy-now'),
          modalRadio    = document.querySelectorAll('.modal__radio'),
          pricingPrice  = document.querySelectorAll('.pricing-price'),
          btnSubmut     = document.querySelector('#btn-submit');

    const openModal  = (btn) => {
        modal.classList.add('modal--open');
        autoSelectPlan(modalRadio, btn);
        if(!btn.dataset.btnPlan) console.log(defaultRadioPlan(modalRadio, pricingPrice));
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('modal--open');
        document.body.style.overflow = '';;
    };

    btnsModalBuy.forEach(btn => {
        btn.addEventListener('click', () => openModal(btn));
    });

    modalBtnClose.addEventListener('click', closeModal);

    btnSubmut.addEventListener('click', (e) => {
        e.preventDefault();
        sendForm();
    })
}