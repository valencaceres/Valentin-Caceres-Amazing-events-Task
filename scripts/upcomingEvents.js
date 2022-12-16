import { renderUpcoming, renderCheck, filtrar } from '../module/functions.js'
const $DivContainer = document.getElementById("card");
const $checkContainer = document.getElementById("checkContainer");
const $SearchContainer = document.getElementById("search");
let events = data.events;

renderUpcoming(events, $DivContainer)
renderCheck(events, $checkContainer);

$checkContainer.addEventListener("change", () => {
  let filtro = filtrar(events, $SearchContainer)
  renderUpcoming(filtro, $DivContainer)
});
$SearchContainer.addEventListener("input", () => {
  let filtro = filtrar(events, $SearchContainer)
  renderUpcoming(filtro, $DivContainer)
});






