import { getData } from "./getServ/getData.js";
import { colorScheme } from "./scripts/colorScheme.js";
import { openModalBuy } from "./scripts/modalBuy.js";
import { pricingPlan } from "./scripts/pricingPlan.js";
import { testimonials } from "./scripts/testimonials.js";
import { timer } from "./scripts/timer.js";

const data = getData();
window.onload = () => {
    data.then(data => {
        setInterval(() => {
            timer(data.timerEndDate)
        }, 1000);
        pricingPlan(data.plans);
        testimonials(data.testimonials);
    });
    openModalBuy();
    colorScheme();
}
console.log(data);