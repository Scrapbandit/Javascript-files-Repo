

let pokemonList = [{

  name:'Charizard'
  height: 5.07,
  type: ['fire', 'flying']

},

{
  name: 'pikachu'
  height: 1.04,
  type: ['electric']

},

{
name: 'Bulbasaur'
height: 2.04,
type: ['grass', 'poison']

}
];

//loops for pokemon list option 1 scheme
  // the formular
  // for (let i = 0; i < pokemonList.length; i++) {
  //}
  for (let i = 0; i < pokemonList.length; i++) {
    document.write('<p>' + pokemonList[i].name + '</p>');
//what to insert in the document.write
}
//loops option 2 (second try)


/*  for(var i = 3; i >= 0; i--){
  if(i == 0){
    document.write(<p>'name' + 'height' .</p>')
non correct code */
