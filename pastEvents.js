const $DivContainer = document.getElementById('card')
let events = data.events

function render(lista, container){
    let html = ''
    for(let element of lista){
        if (element.date < '2022') {
            html += `<div class="card bg-success" style="width: 16rem" id="cards">
            <img
              src=${element.image}
              class="card-img-top"
              alt="concierto"
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

  }
  container.innerHTML = html
}
render(events, $DivContainer)