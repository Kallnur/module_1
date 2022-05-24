export const winScrollTop = (sections, href) => {
    sections.forEach(section => {
        const classes = section.classList.map(tagClass => tagClass);
        console.log(classes);
    })
    // window.screenTop({
    //     top: section.offsetTop,
    //     smoorh: behavior
    // })
}