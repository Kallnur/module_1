import { winAutoScroll, winResetScroll } from "../utils/defFunctions.js";

export const bodyScroll = () => {
    const navbarList = document.querySelector('.header__navbar-list'),
          logoLinks   = document.querySelectorAll('.logo-link'),
          sections   = document.querySelectorAll('section');

    logoLinks.forEach(logoLink => logoLink.onclick = (e) => {
        e.preventDefault();
        winResetScroll();
    })

    navbarList.addEventListener('click', function(event){
        if(event.target.classList.contains('header__navbar-links')){
            event.preventDefault();
            let linkHref = event.target.textContent;
            winAutoScroll(sections, linkHref)
        };
    })
}