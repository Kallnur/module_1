export const addItemTimer = (timerLimits, timerList, sectionTimer) => {
    for(let i in timerLimits){
        if(timerLimits['days'] >= 0){
            Array.from(timerList.children).forEach(item => {
                if(item.children[1].textContent == i){
                    item.children[0].textContent = String(timerLimits[i]).padStart(2, '0');
                }
            })
        }
        // else sectionTimer.style.display = 'none';
    }

}