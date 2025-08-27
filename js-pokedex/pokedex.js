const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");

let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        //.then((data) => console.log(data));
        .then((data) => mostrarPokemon(data));
}
function mostrarPokemon(poke) {
    //mostrar los tipos de cada pokemon
    let tipos = poke.types.map(
        (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
    );
    tipos = tipos.join("");

    //poner ceros delante del ID
    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    //crear las vistas de los pokemons
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="pokemon-imagen" >
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-id">#${pokeId}</div>
            <div class="pokemon-tipos">${tipos}</div>
        </div>
        `;
    listaPokemon.append(div);
}

botonesHeader.forEach((boton) =>
    boton.addEventListener("click", (event) => {
      const botonId = event.currentTarget.id;
  
      listaPokemon.innerHTML = "";
  
      for (let i = 1; i <= 251; i++) {
        fetch(URL + i)
          .then((response) => response.json())
          .then((data) => {
            if (botonId === "ver-todos") {
              mostrarPokemon(data);
            } else {
              const tipos = data.types.map((type) => type.type.name);
              if (tipos.some((tipo) => tipo.includes(botonId))) {
                mostrarPokemon(data);
              }
            }
          });
      }
    })
  );
  


/*Buscar pokemon*/

function buscarPokemon(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  const buscador = document.getElementById('buscador').value.toLowerCase(); // Obtener el valor ingresado
  listaPokemon.innerHTML = ""; // Limpiar la lista de Pokémon

  fetch(URL + buscador)
      .then((response) => {
          if (!response.ok) {
              throw new Error('Pokemon not found'); // Si no encuentra el Pokémon
          }
          return response.json();
      })
      .then((data) => {
          mostrarPokemon(data); // Mostrar el Pokémon buscado
      })
      .catch((error) => {
          listaPokemon.innerHTML = "<p>Pokemon not found</p>"; // Mostrar mensaje de error
      });
}