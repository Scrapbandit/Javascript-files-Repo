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
}
];

  //.foreach() task 1.5

pokemonList.forEach(function(pokemon){
  document.write(pokemon.name +" "+ "(height)" +" "+ pokemon.height + " "+ "type:" + " " + pokemon.type);
  document.write ( '<p/>');
});
//

return {
  add: function (pokemon) {
    pokemonList.push (pokemon);
  },
  getAll: function () {
    return pokemonList;
  }
};
})();

// add() function

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Mew'});
console.log(pokemonRepository.getAll());









/*
//loops for pokemon list option 1 scheme

  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 5) {
    //  console.log('WOW! this Pokemon is big')
    document.write(pokemonList[i].name + '(height : ' + pokemonList[i].height  +')' + 'WOW! this Pokemon is big! </br>')
  }
    else {
  document.write (pokemonList[i].name + '(height : ' + pokemonList[i].height +')  </br>')
}
} */

/*
let pokemon= { name: 'Charizard', height: 5.07};

if (pokemon.height > 5) {
  console.log('WOW! this Pokemon is big');
}
*/
