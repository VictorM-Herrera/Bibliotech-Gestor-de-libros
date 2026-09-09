const filterSelect = document.getElementById("filters-select");
const searchBar = document.getElementsByClassName("searchbar")[0];
const searchButton = document.getElementsByClassName("searchbutton")[0];
const cardSection = document.getElementsByClassName('cards-section')[0];
const navFilter = document.getElementsByClassName('nav-filters')[0];
const addButton = document.getElementsByClassName('add-button')[0];
const modal = document.getElementsByClassName('modal-container')[0];
const addForm = document.getElementById('addForm');
let listaFiltrada = [];
let allView = true;

//favorito y reservar
cardSection.addEventListener('click', (e)=>{
    const favButton = e.target.closest('.icon')
    const rightButton = e.target.closest('.right-icon')
    const bookCard = e.target.closest('.book-card').getAttribute('id');

    if (!favButton && !rightButton) return;

  
    let libro = listaLibros.find((libro) => libro.id==bookCard)
    if (favButton) {
        libro.favorito = !libro.favorito;
        
    }else{
        libro.disponible = !libro.disponible;
        if (!libro.disponible) {
          misReservas.push(libro);
        }else{
          misReservas = misReservas.filter(reserva => reserva.id != libro.id);
        }
    }
    localStorage.setItem("books", JSON.stringify(listaLibros));
    localStorage.setItem("booked", JSON.stringify(misReservas));
    
    if (allView) {
      renderizar(listaLibros);
    }else{
      renderizar(listaFiltrada);
    }
});


searchButton.addEventListener("click", () => {
  creaListaFiltrada();
});
document.addEventListener("keydown", (e) => {
  if (e.key == 'Enter') {
    creaListaFiltrada();
  }
});
function creaListaFiltrada() {
  if (filterSelect.value == "ano") {
    listaFiltrada = listaLibros.filter((libro) => String(libro.ano).includes(searchBar.value));
    renderizar(listaFiltrada);
  } else if (filterSelect.value == "genero") {
    listaFiltrada = listaLibros.filter((libro) => libro.genero.toLowerCase().includes(searchBar.value.toLowerCase()));
    renderizar(listaFiltrada);
  } else if (filterSelect.value == "texto") {
    listaFiltrada = listaLibros.filter((libro) => libro.titulo.toLowerCase().includes(searchBar.value.toLowerCase()));
    renderizar(listaFiltrada);
  } else {
    renderizar(listaLibros);
  }
}

navFilter.addEventListener('click', (e)=>{
  const filterPill = e.target.closest('.filter-pill');
  if (!filterPill) return;

  if (filterPill.getAttribute('id') == 'todos') {
    allView = true;
    renderizar(listaLibros);
  }else if(filterPill.getAttribute('id') == 'favs'){
    allView = false;
    listaFiltrada = listaLibros.filter(libro => libro.favorito === true);
    renderizar(listaFiltrada);
  }else{
    allView = false;
    listaFiltrada = misReservas;
    renderizar(listaFiltrada);
  }
})

addButton.addEventListener('click', ()=>{
  handleModal();
})

function handleModal(){
  modal.classList.toggle('none');
}
modal.addEventListener('click', (e)=>{
  const form = e.target.closest('#addForm');
  if (form) return;
  
  addForm.reset();
  handleModal();
  
})

addForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const formData =  new FormData(addForm);
  if (formData.get('ano') < 0) {
    console.log('No se puede ingresar numeros menores a 0');
    return;
  }
  
  listaLibros.push({
    id: Math.max(...listaLibros.map(libro => libro.id)) + 1,
    titulo: formData.get('titulo'),
    autor: formData.get('autor'),
    genero: formData.get('genero'),
    ano: formData.get('ano'),
    disponible: true,
    favorito: false,
  })

  localStorage.setItem('books', JSON.stringify(listaLibros));
  renderizar(listaLibros)
  handleModal();
  addForm.reset();
})

