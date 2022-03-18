//wrapping the code in IIFE

let pokemonRepository = (function () {
  let modalContainer = document.querySelector('#modal-container');
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20'; //using fetch in repo


  function add(pokemon){
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push (pokemon);
    }  else {
      console.log("pokemon is not correct");
    }
  }
  function getAll () {
    return pokemonList;
  }


  //addListItem function task 1.6 and deleting document.write

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement ("button"); // create button
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(){ //addEventListener
      showDetails(pokemon);
    })
  }


  function loadList() { //loadList
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(item) { //loadDetails
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //adding showModal
      showModal(pokemon.name, pokemon.height, pokemon.types, pokemon.imageUrl);
      console.log("pokemon selected: " + pokemon.name + "is" + pokemon.height + "and with the abilities of" + pokemon.types);
      let modal = document.createElement('div');
      //modal.classList.add('modal')
    });
  }
//exercise 1.8 the modal container

  function showModal(name, height, type, imageUrl){
    

    let modalContainer = document.querySelector(".modal-container");
    document.querySelector('.modal__title').innerText = name;
    //modalContainer.classList.add("is-visible");
    //modalContainer.innerText = name;
    let description = 'Height: ' + height + '<br>type: ' + type;

    document.querySelector('.modal__text').innerHTML = description;
    document.querySelector('.modal__img').setAttribute('src', imageUrl);
    console.log(imageUrl);

    let modal = document.createElement("div");
    modal.classList.add("modal");

    let closeButton = document.createElement(".modal-close");
    closeButton.addEventListener("click", hideModal);

    window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible'))
    hideModal();
    });

    let titleElement = document.createElement ("h1");
    titleElement.innerText = title;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");
  }

/*  document.querySelector("#show-modal").addEventListener("click", ()=>{
    showModal('Modal title', "This is the modal content!");
  });*/

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();

//pokemonRepository.add({name: "Mew", height: 1.5, type: ["Psychic"] });
//console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
