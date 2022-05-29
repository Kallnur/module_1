import jsonData from "../data/config.json";
import { colorScheme } from "./scripts/colorScheme.js";
import { mobileNavbar } from "./scripts/mobileNavbar.js";
import { openModalBuy } from "./scripts/modalBuy.js";
import { pricingPlan } from "./scripts/pricingPlan.js";
import { testimonials } from "./scripts/testimonials.js";
import { timer } from "./scripts/timer.js";
import { addLinks } from "./scripts/addLinks.js";

import '../css/main.css'

window.onload = () => {
    mobileNavbar();
    addLinks(jsonData.appStoreLink);

    setInterval(() => {
        timer(jsonData.timerEndDate);
    }, 1000);

    pricingPlan(jsonData.plans);
    testimonials(jsonData.testimonials);
    openModalBuy();
    colorScheme();
}