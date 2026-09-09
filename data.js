let libros = [
  {
    id: 2,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    ano: 1967,
    disponible: true,
    favorito: false,
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopía",
    ano: 1949,
    disponible: true,
    favorito: false,
  },
  {
    id: 4,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Novela",
    ano: 1605,
    disponible: true,
    favorito: false,
  },
  {
    id: 5,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Literatura infantil",
    ano: 1943,
    disponible: true,
    favorito: false,
  },
  {
    id: 6,
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    genero: "Cuento",
    ano: 1944,
    disponible: false,
    favorito: false,
  },
  {
    id: 7,
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    genero: "Novela",
    ano: 1881,
    disponible: true,
    favorito: false,
  },
  {
    id: 8,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Novela de romance",
    ano: 1813,
    disponible: true,
    favorito: false,
  },
  {
    id: 9,
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    genero: "Novela",
    ano: 1955,
    disponible: true,
    favorito: false,
  },
];

let misReservas = [
  // {
  //   id: 2,
  //   titulo: "Cien años de soledad",
  //   autor: "Gabriel García Márquez",
  //   genero: "Realismo mágico",
  //   ano: 1967,
  //   disponible: true,
  //   favorito: false,
  // },
];


for (const libro of libros) {
  if (misReservas.some((reserva) => reserva.id === libro.id)) {
    libro.disponible = false;
  }
}
if (!JSON.parse(localStorage.getItem('books'))) {
  localStorage.setItem("books", JSON.stringify(libros));
}

localStorage.setItem("booked", JSON.stringify(misReservas));
