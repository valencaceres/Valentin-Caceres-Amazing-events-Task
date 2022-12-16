const events = data.events
const container = document.getElementById('details')
const id = new URLSearchParams(location.search).get("id")
console.log(id)

const evento = events.find(element => element._id == id)
console.log(evento)


container.innerHTML = `<div id="detailsimg">
                        <img src=${evento.image} alt="" id="image">
                        </div>
                        <div id="paragraph">
                        <h2>${evento.name}</h2>
                        <p>${evento.description}</p>
                        </div>`