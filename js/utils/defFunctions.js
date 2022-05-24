export const winAutoScroll = (sections, href) => {
    sections.forEach(section => {
        if(section.classList.contains(href.toLowerCase())){
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            })
        }
    })
}

export const winResetScroll = () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
}