const $container = document.getElementById('details')
const id = new URLSearchParams(location.search).get("id")
const url = 'https://amazing-events.onrender.com/api/events'
let data;
fetch(url)
  .then(res => res.json())
  .then(events => {
    data = events.events
    const evento = data.find(element => element._id == id)
    $container.innerHTML = `<div id="detailsimg">
                        <img src=${evento.image} alt="" id="image">
                        </div>
                        <div id="paragraph">
                        <h2>${evento.name}</h2>
                        <p>${evento.description}</p>
                        </div>`
  })
  .catch(err => console.log(err))








