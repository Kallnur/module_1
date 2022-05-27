export const colorScheme = () => {
    const tagToggleColor   = document.querySelector('.toggle-color-scheme'),
          btnLight         = document.querySelector('.toggle-color-scheme__btn-light'),
          btnDark          = document.querySelector('.toggle-color-scheme__btn-dark'),
          toggleChemeTitle = document.querySelector('#toggleColorChemeTitle'),
          activeColorTxt   = document.querySelector('#colorSchemeActiveTxt');

    const toggleColorLight = () => {
        tagToggleColor.classList.remove('toggle-color-scheme--dark');
        tagToggleColor.classList.add('toggle-color-scheme--light');
        document.documentElement.style.setProperty('--toggle-bg', 'var(--white-color)');
        document.documentElement.style.setProperty('--toggle-color', 'var(--main-color)');
        toggleChemeTitle.textContent = 'light mode'
        activeColorTxt.textContent = 'light';
    }
    const toggleColorDark = () => {
        tagToggleColor.classList.remove('toggle-color-scheme--light');
        tagToggleColor.classList.add('toggle-color-scheme--dark');
        document.documentElement.style.setProperty('--toggle-bg', 'var(--main-color)');
        document.documentElement.style.setProperty('--toggle-color', 'var(--white-color)');
        toggleChemeTitle.textContent = 'dark mode'
        activeColorTxt.textContent = 'dark';
    }

    btnDark.onclick  = toggleColorDark;
    btnLight.onclick = toggleColorLight;
}