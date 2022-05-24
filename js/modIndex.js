import { getData } from "./getServ/getData.js";
import { openModalBuy } from "./scripts/modalBuy.js";

const data = getData();
window.onload = () => {
    openModalBuy();
}
console.log(data);