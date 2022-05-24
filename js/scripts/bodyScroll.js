// import { winScrollTop } from "../utils/defFunctions";

export const bodyScroll = () => {
    const navbarList = document.querySelector('.header__navbar-list'),
          sections   = document.querySelectorAll('section');

    navbarList.addEventListener('click', function(event){
        if(event.target.classList.contains('header__navbar-links')){
            let linkHref = event.target.textContent;
            // winScrollTop(sections)
        };
    })
}