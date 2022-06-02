export const mobileNavbar = () => {
    const openNavbarBtn  = document.querySelector('.header__burger');
    const closeNavbarBtn = document.querySelector('.header__mobile-close');
    const navbarLinks    = document.querySelectorAll('.header__navbar-link');
    const mobileNavbar   = document.querySelector('.header__mobile');

    const closeNavbar = () => {
        mobileNavbar.classList.remove('header__mobile--show')
        document.body.style.overflow = '';
    };

    openNavbarBtn.onclick = () => {
        mobileNavbar.classList.add('header__mobile--show');
        document.body.style.overflow = 'hidden';
    };

    closeNavbarBtn.onclick = () => closeNavbar();
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });
}