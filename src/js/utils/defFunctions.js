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

export const autoSelectPlan = (modalRadio, btn) => {
    modalRadio.forEach(inpData => {
        if(btn.dataset.btnPlan === inpData.dataset.radioPlan) inpData.checked = true;
    })
}

export const defaultRadioPlan = (radios, pricingPrice) => {
    let prices = [];
    pricingPrice.forEach((price, ind) => {prices.push({
        price: price.textContent,
        plan: price.dataset.pricingPlan
    })});
    let mostExpensive = prices.sort((a,b) => a.price - b.price).pop();

    radios.forEach(radio => {
        if(radio.dataset.radioPlan === mostExpensive.plan) radio.checked = true;
    })

    return mostExpensive;
}