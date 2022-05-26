import { addItemTimer } from "../utils/addItemTimer.js";
import { resizeItemWidth } from "../utils/defFunctions.js";

export const timer = (endDate) => {
    const endTime      = Date.parse(endDate) - Date.parse(new Date());  // Format date ISO 8601 or RFC2822
    const timerList    = document.querySelector('.timer-block__list');

    let endSeconds = Math.floor((endTime / 1000)),
        endMinutes = Math.floor((endSeconds / 60)),
        endHourse  = Math.floor((endMinutes / 60)),
        endDays    = Math.floor(endHourse / 24);

    const timerLimits = {
        days: endDays,
        hours: Math.floor(endHourse - endDays * 24),
        minutes: Math.floor(endMinutes - endHourse * 60),
        seconds: Math.floor(endSeconds - endMinutes * 60)
    }

    addItemTimer(timerLimits, timerList);

    if(timerList.children.length === 4) resizeItemWidth(timerList.childNodes, '20%')
    else if (timerList.children.length === 3) resizeItemWidth(timerList.childNodes, '32%')
    else if (timerList.children.length === 2) resizeItemWidth(timerList.childNodes, '45%')
    else if (timerList.children.length === 1) resizeItemWidth(timerList.childNodes, '90%')
}