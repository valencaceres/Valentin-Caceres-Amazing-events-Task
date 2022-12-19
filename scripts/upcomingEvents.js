import { render, renderCheck, filtrar } from '../module/functions.js'
const $DivContainer = document.getElementById("card");
const $checkContainer = document.getElementById("checkContainer");
const $SearchContainer = document.getElementById("search");
let data;
const url = 'https://amazing-events.onrender.com/api/events'
fetch(url)
  .then(res => res.json())
  .then(events => {
    data = events.events.filter(evento => evento.date > events.currentDate)
    renderCheck(data, $checkContainer)
    render(data, $DivContainer)
  })
  .catch(err => console.log(err))

$checkContainer.addEventListener("change", () => {
  let filtro = filtrar(data, $SearchContainer)
  render(filtro, $DivContainer)
});
$SearchContainer.addEventListener("input", () => {
  let filtro = filtrar(data, $SearchContainer)
  render(filtro, $DivContainer)
});






