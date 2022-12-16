import { renderPast, renderCheck, filtrar } from "../module/functions.js";

const $DivContainer = document.getElementById("card");
const $checkContainer = document.getElementById("checkContainer");
const $SearchContainer = document.getElementById("search");
let events = data.events;

renderPast(events, $DivContainer)
renderCheck(events, $checkContainer);

$checkContainer.addEventListener("change", () => {
  let filtro = filtrar(events, $SearchContainer)
  renderPast(filtro, $DivContainer)
});
$SearchContainer.addEventListener("input", () => {
  let filtro = filtrar(events, $SearchContainer)
  renderPast(filtro, $DivContainer)
});





