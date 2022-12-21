const url = 'https://amazing-events.onrender.com/api/events'
let data;
fetch(url)
  .then(res => res.json())
  .then(events => {
    data = events.events
  })
  .catch(err => console.log(err))

export function render(list, container) {
  container.innerHTML = ''
  let html = ''
  list.forEach((element) => {
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
        <a href="./details.html?id=${element._id}" class="btn btn-dark">View more</a>
      </div>
    </div>
  </div>`
  container.innerHTML = html
  });
}

export function renderUpcoming(lista, container){
  let html = ''
  lista.forEach(element => {
    if (element.date.includes('2022')) {
      html += `<div class="card bg-warning" id="cards">
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
          <a href="./details.html?id=${element._id}" class="btn btn-dark">View more</a>
        </div>
      </div>
    </div>`;
  }
  });
     
  container.innerHTML = html
}

export function renderPast(lista, container){
  let html = ''
  lista.forEach(element => {
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
          <a href="./details.html?id=${element._id}" class="btn btn-dark">View more</a>
        </div>
      </div>
    </div>`;
  }})


container.innerHTML = html
}

export function renderCheck(list, contenedor) {
   let html = "";
   let newSet = new Set(list.map((element) => element.category));
   let categories = Array.from(newSet);
   categories.forEach((element) => {
     html += `<input type="checkbox" id="${element}" value='${element}'/>
     <label for="${element}" class="fs-6 m-1" >${element}</label>`;
   });
   contenedor.innerHTML = html;
}

export function filtrarCards(eventos) {
   const checkbox = document.querySelectorAll(
     "input[type = 'checkbox']:checked"
   );
   let selectedCategories = Array.from(checkbox).map((element) => element.value);
   const filtro = selectedCategories
     .map((element) =>
       eventos.filter((event) => {
        return event.category === element;
      })
     )
     .flat();
   if (!checkbox.length) {
     return data;
   } 
   else {
     return filtro;
   }
}

export function filtrarPorBusqueda(eventos, value) {
   return eventos.filter((evento) =>
    evento.name.toLowerCase().includes(value.toLowerCase())
  );
}

export function filtrar(eventos, $SearchContainer) {
  let filtrarPorGenero = filtrarCards(eventos);
  let filtroBusqueda =  filtrarPorBusqueda(filtrarPorGenero, $SearchContainer.value);
   return filtroBusqueda;
}


