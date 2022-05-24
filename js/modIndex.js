import { getData } from "./getServ/getData.js";
import { bodyScroll } from "./scripts/bodyScroll.js";

const data = getData();
window.onload = () => {
    bodyScroll();
}
console.log(data);