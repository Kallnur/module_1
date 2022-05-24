export const openModalBuy = () => {
    const modalBuyNow  = document.querySelector('.modal'),
          btnsModalBuy = document.querySelectorAll('.btn-buy-now');

    btnsModalBuy.forEach(btn => btn.onclick = () => {
        modalBuyNow.classList.add('modal--open');
    })
}