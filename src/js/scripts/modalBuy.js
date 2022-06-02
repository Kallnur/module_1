import { autoSelectPlan, defaultRadioPlan } from "../utils/defFunctions.js";
import { sendForm } from "./sendForm.js";

export const openModalBuy = () => {
    const modal         = document.querySelector('.modal');
    const modalBtnClose = document.querySelector('.modal__close');
    const btnsModalBuy  = document.querySelectorAll('.btn-buy-now');
    const modalRadio    = document.querySelectorAll('.modal__radio');
    const pricingPrice  = document.querySelectorAll('.pricing-price');
    const modalBody     = document.querySelector('.modal__body');
    const btnSubmut     = document.querySelector('#btn-submit');

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