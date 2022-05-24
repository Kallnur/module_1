import { getData } from "./getServ/getData.js";
import { bodyScroll } from "./scripts/bodyScroll.js";
import { openModalBuy } from "./scripts/modalBuy.js";

const data = getData();
window.onload = () => {
    bodyScroll();
    openModalBuy();
}
console.log(data);