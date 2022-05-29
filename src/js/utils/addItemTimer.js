export const addItemTimer = (timerLimits, timerList) => {
    const sectionTimer = document.querySelector('.timer-block');
    
    for(let i in timerLimits){
        if(timerLimits['days'] >= 0){
            const timerItem = document.querySelector(`.timer-${i}`);
            if(!timerItem){
                const timerNewItem = document.createElement('li'),
                     spanDateValue = document.createElement('span'),
                     spanDateTxt   = document.createElement('span');
                timerNewItem.classList.add('timer-block__item', `timer-${i}`);

                spanDateValue.textContent = timerLimits[i];
                spanDateTxt.textContent = i;

                timerNewItem.append(spanDateValue, spanDateTxt);
                if(timerLimits[i] > 0) timerList.append(timerNewItem)
            }else{
                timerItem.childNodes.forEach((span, ind) => {
                    if(ind === 0) span.textContent = String(timerLimits[i]).padStart(2, '0');
                    if(ind === 1) span.textContent = i;
                })
            }
        }
        else sectionTimer.style.display = 'none';
    }

}