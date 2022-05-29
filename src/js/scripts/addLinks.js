export const addLinks = (link) => {
    const getLink = document.querySelector('.link-get-app');
    const getForm = document.querySelector('.form-get-app');

    getLink.href   = link;
    getForm.action = link;
}