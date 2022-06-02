import jsonData from "../data/config.json";
import { colorScheme } from "./scripts/colorScheme.js";
import { mobileNavbar } from "./scripts/mobileNavbar.js";
import { openModalBuy } from "./scripts/modalBuy.js";
import { pricingPlan } from "./scripts/pricingPlan.js";
import { testimonials } from "./scripts/testimonials.js";
import { timer } from "./scripts/timer.js";
import { addLinks } from "./scripts/addLinks.js";

import '../css/main.css'

timer(jsonData.timerEndDate);
// window.onload = () => {
    mobileNavbar();
    addLinks(jsonData.appStoreLink);
    timer(jsonData.timerEndDate);
    const timerInterval = setInterval(() => {
        const timerOnOff = timer(jsonData.timerEndDate);
        if(timerOnOff === false) clearInterval(timerInterval)
    }, 1000);

    pricingPlan(jsonData.plans);
    testimonials(jsonData.testimonials);
    openModalBuy();
    colorScheme();
// }