let listaLibros = JSON.parse(localStorage.getItem("books"));

const cardsSection = document.getElementsByClassName("cards-section")[0];



function renderizar(libros) {
  let listaReservas = JSON.parse(localStorage.getItem("booked"));
  cardsSection.innerHTML = "";
  for (const libro of libros) {
    if (listaReservas.some((reserva) => reserva.id === libro.id)) {
      cardsSection.innerHTML += `
           <div class="book-card" id="${libro.id}">
                <span class="icon">${libro.favorito ? `<span class="starFill-icon"></span>` : `<span class="star-icon"></span>`}</span>
                <span class="right-icon">${libro.disponible ? `<span class="book-icon"></span>` : `<span class="booked-icon"></span>`}</span>
                <h5 class="subtitle-card" title="${libro.autor}">${libro.autor}</h5>
                <h3 class="title-card" title="${libro.titulo}">${libro.titulo}</h3>
                <div class="pills-card">
                  <span class="pill" title="año">${libro.ano}</span>
                  <span class="pill" title="${libro.genero}">${libro.genero}</span>
                  <span class="pill ${libro.disponible ? "disp" : "nodisp"}" title="${libro.disponible ? "disponible" : "reservado"}">${libro.disponible ? `<span class="available-icon "></span>` : `<span class="notAvailable-icon "></span>`}</span>
                </div>
              </div>
        `;
        
    } else {
      cardsSection.innerHTML += `
           <div class="book-card" id="${libro.id}">
                <span class="icon">${libro.favorito ? `<span class="starFill-icon"></span>` : `<span class="star-icon"></span>`}</span>
                <span class="right-icon ${libro.disponible ? "" : "none"}"><span class="book-icon"></span></span>
                <h5 class="subtitle-card" title="${libro.autor}">${libro.autor}</h5>
                <h3 class="title-card" title="${libro.titulo}">${libro.titulo}</h3>
                <div class="pills-card">
                  <span class="pill" title="año">${libro.ano}</span>
                  <span class="pill" title="${libro.genero}">${libro.genero}</span>
                  <span class="pill ${libro.disponible ? "disp" : "nodisp"}" title="${libro.disponible ? "disponible" : "reservado"}">${libro.disponible ? `<span class="available-icon "></span>` : `<span class="notAvailable-icon "></span>`}</span>
                </div>
              </div>
        `;
    }
  }
}

renderizar(listaLibros); // lo renderizo por primera vez
