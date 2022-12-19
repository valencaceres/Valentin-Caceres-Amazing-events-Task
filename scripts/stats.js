const firstStat = document.getElementById('firstStat')
const secondStat = document.getElementById('secondStat')
const thirdStat = document.getElementById('thirdStat')
const url = 'https://amazing-events.onrender.com/api/events'
let data;
fetch(url)
  .then(res => res.json())
  .then(events => {
    data = events.events
    Stat(data, firstStat)
    capacity(data, firstStat)
    upcomingStats(data, secondStat)
    pastStats(data, thirdStat)
  })
  .catch(err => console.log(err))

function Stat(events, container){
    let html = ''
    let percentage = events.map((element) => {
    return {nombre: element.name, porcentaje : element.assistance / element.capacity * 100}}).filter(element => element.porcentaje)
    let max = Math.max(...percentage.map(element => element.porcentaje))
    max = percentage.find(element => element.porcentaje === max)
    let min = Math.min(...percentage.map(element => element.porcentaje))
    min = percentage.find(element => element.porcentaje === min)
    html = `<td class="border border-dark bg-warning">${max.nombre} ${max.porcentaje.toFixed(2)}%</td>
    <td class="border border-dark bg-warning">${min.nombre} ${min.porcentaje.toFixed(2)}%</td>` 
    container.innerHTML = html
  }

function capacity(events,container){
    let html = ''
    let capacidad = events.map(element => {
     return  {nombre:element.name, capacidad:element.capacity}})
     let math = Math.max(...capacidad.map(element => element.capacidad))
     let result = capacidad.find(element => element.capacidad === math)
     html = `<td class="border border-dark bg-warning">${result.nombre} ${result.capacidad} capacity</td>`
      container.innerHTML += html
    }
    
function upcomingStats(events, container){
    let html = ''
    events.forEach(element => {
      if(element.date.includes('2022')){
        let attendance = element.estimate / element.capacity * 100
        html += `<tr>
        <td class="border border-dark bg-warning">${element.category}</td>
        <td class="border border-dark bg-warning">${element.price * element.estimate}$</td>
        <td class="border border-dark bg-warning">${attendance.toFixed(2)}%</td>
      </tr>`
      }
    })
    container.innerHTML = html
    }
function pastStats(events, container){
    let html = ''
    events.forEach(element => {
      if(element.date < '2022'){
        let attendance = element.assistance / element.capacity * 100
        html += `<tr>
        <td class="border border-dark bg-warning">${element.category}</td>
        <td class="border border-dark bg-warning">${element.price * element.assistance}$</td>
        <td class="border border-dark bg-warning">${attendance.toFixed(2)}%</td>
      </tr>`
      }
    })
    container.innerHTML = html
    }

//mayor porcentaje = asistencia / capacidad * 100