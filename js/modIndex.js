import { getData } from "./getServ/getData.js";
import { openModalBuy } from "./scripts/modalBuy.js";
import { timer } from "./scripts/timer.js";

const data = getData();
window.onload = () => {
    data.then(data => {
        setInterval(() => {
            timer(data.timerEndDate)
        }, 1000)
        
    })
    openModalBuy();
}
console.log(data);