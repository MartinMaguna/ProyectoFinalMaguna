//Login


const formulario = document.getElementById("formulario");

formulario.addEventListener ("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

    const perfilUsuario= document.querySelector(".perfil__usuario");

    document.querySelector (".perfil__usuario")
    perfilUsuario.innerText = "Este es el perfil de " + nombre 

});


const ficcion = document.querySelector("#ficcion");
mostrarPeliculasFiccion.addEventListener("mouseon", mostrarFiccion)



//boton agregar a lista de favoritos
const peliculasFavoritas = [];

// functionAgregarFavoritas (pelicula) { 
// const ExisteEnFavoritas =  
// }


//Mensaje: Agregada a lista de favoritos.

localStorage.setItem("Usuario", nombre);
//localStorage.setItem (favoritos);


//Array de objetos (películas)

const peliculas = [
    {
        titulo: "30 años de oscuridad",
        director: "Manuel H. Martin",
        año: 2012,
        genero: "Documental",
        duración: "Largometraje"
    },
    {
        titulo: "Años de calle",
        director: "Alejandra Grinschpun",
        año: 2013,
        genero: "Documental",
        duración: "Largometraje"
    },
    {
        titulo: "Bolishopping",
        director: "Pablo Stigliani",
        año: 2014,
        genero: "Ficción",
        duración: "Largometraje"
    },
    {
        titulo: "Guaraní",
        director: "Luis Zorraquín",
        año: 2016,
        genero: "Ficción",
        duración: "Largometraje"
    },
    {
        titulo: "El otro lado de todo",
        director: "Mira Turajlik",
        año: 2017,
        genero: "Ficción",
        duración: "Largometraje"
    },
    {
        titulo: "A new home",
        director: "Žiga Virc",
        año: 2016,
        genero: "Ficción",
        duración: "Cortometraje",
    },
    {
        titulo: "Chike",
        sinopsis: "La adolescencia es muchas veces un camino sinuoso y solitario. Ana y Carla se encuentran para experimentar con sus deseos, determinaciones y miedos para vivir momentos fugaces pero decisivos.",
        director: "Lucia Ravanelli",
        año: 2016,
        genero: "Ficción",
        duración: "Cortometraje",
    },
    {
        titulo: "Les miserables",
        imagen: "",
        sinopsis: "En el barrio de la novela de Victor Hugo, devenido al día de hoy en barrio marginal, un policía recién transferido aprende prácticas policiales abusivas de sus dos compañeros más veteranos. La comunidad amenaza con explotar cuando un adolescente logra filmarlos.",
        director: "Ladj Ly",
        año: 2017,
        genero: "Ficción",
        duración: "Cortometraje",
    },
];

// Puedes acceder a los elementos del arreglo de esta manera:
//document.write(peliculas[0].titulo); // Imprimirá "El Padrino"
//console.log(peliculas[3].director); // Imprimirá "Damien Chazelle"
//console.log(peliculas[6]); // Imprimirá "Avatar"
//console.log(peliculas[7]); // Imprimirá 2010