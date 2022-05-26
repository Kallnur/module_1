export const validStr = (str, elem) => {
    if(str.length < 1) elem.parentElement.classList.add('valid_err')
    else if(str.length >= 1 && str.length < 3) elem.parentElement.classList.add('valid_err_length')
    else if(str.length >= 3){
        elem.parentElement.classList.remove('valid_err_length', 'valid_err')
    }
}

export const resizeItemWidth = (list, width) => {
    list.forEach(item => {
        item.style.width = width;
    });
}