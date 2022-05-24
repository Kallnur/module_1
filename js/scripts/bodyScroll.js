export const bodyScroll = () => {
    const navbarList = document.querySelector('.header__navbar-list');
    navbarList.addEventListener('click', function(event){
        if(event.target) console.log(event.target);
    })
}