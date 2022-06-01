import { addItemTimer } from "../utils/addItemTimer.js";
import { deformatDateToISO } from "../utils/defFunctions.js";

export const timer = (endDate) => {
    const deformatDate = deformatDateToISO(endDate);
    const endTime    = Date.parse(deformatDate) - Date.parse(new Date());
    const timerList  = document.querySelector('.timer-block__list');
    const sectionTimer = document.querySelector('.timer-block');

    if(endTime < 10){
        sectionTimer.style.display = 'none';
        return false;
    }
    else sectionTimer.style.display = '';

    const endSeconds = Math.floor((endTime / 1000));
    const endMinutes = Math.floor((endSeconds / 60));
    const endHourse  = Math.floor((endMinutes / 60));
    const endDays    = Math.floor(endHourse / 24);

    const timerLimits = {
        days: endDays,
        hours: Math.floor(endHourse - endDays * 24),
        minutes: Math.floor(endMinutes - endHourse * 60),
        seconds: Math.floor(endSeconds - endMinutes * 60)
    }

    addItemTimer(timerLimits, timerList, sectionTimer);
}