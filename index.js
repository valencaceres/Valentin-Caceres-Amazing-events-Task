const $DivContainer = document.getElementById('card')
let events = data.events

function render(lista, container){
    let html = ''
    for(let element of lista){
        html += `<div class="card" id="cards">
        <img
          src=${element.image}
          class="card-img-top"
          alt=${element.name}
          id="img"
        />
        <div class="card-body">
          <h2 class="card-title">${element.name}</h2>
          <p class="card-text">
            ${element.description}
          </p>
          <div class="d-flex justify-content-between">
            <p>${element.price}$</p>
            <p>${element.date}</p>
            <a href="#" class="btn btn-dark">Go</a>
          </div>
        </div>
      </div>`;
  }
  container.innerHTML = html
}
render(events, $DivContainer)