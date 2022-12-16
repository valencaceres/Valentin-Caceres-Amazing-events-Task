import { render, renderCheck, filtrar } from '../module/functions.js'
const $DivContainer = document.getElementById("card");
const $checkContainer = document.getElementById("checkContainer");
const $SearchContainer = document.getElementById("search");
let events = data.events;

renderCheck(events, $checkContainer);
render(events, $DivContainer);

$checkContainer.addEventListener("change", () => {
  let filtro = filtrar(events, $SearchContainer)
  render(filtro, $DivContainer)
});

$SearchContainer.addEventListener("input", () => {
  let filtro = filtrar(events, $SearchContainer)
  render(filtro, $DivContainer)
});


