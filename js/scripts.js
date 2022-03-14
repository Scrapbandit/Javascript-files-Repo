//wrapping the code in IIFE

let pokemonRepository = (function () {

let pokemonList = [{

  name:'Charizard',
  height: 5.07,
  type: ['fire', 'flying']
},

{
  name: 'Pikachu',
  height: 1.04,
  type: ['electric']
},

{
name: 'Bulbasaur',
height: 2.04,
type: ['grass', 'poison']
},
];

function add(pokemon){
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ) {
    pokemonList.push (pokemon);
  }  else {
        console.log("pokemon is not correct");
      }
  }
function getAll () {
    return pokemonList;
  }

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement ("button");
  button.innerText = pokemon.name;
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
}
return {
   add: add,
   getAll: getAll,
   addListItem: addListItem
 };
})();

// add() function
pokemonRepository.add({name: "Mew", height: 1.5, type: ["Psychic"] });
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
