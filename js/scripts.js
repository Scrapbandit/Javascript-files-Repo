//wrapping the code in IIFE

let pokemonRepository = (function () {
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
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#modal-container");

    button.innerText = pokemon.name;
    // button.classList.add("button-class");
    button.classList.add('btn-outline-dark');
    listpokemon.classList.add('group-list-item');
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
        console.log(item)
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
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //adding showModal
      showModal(pokemon);
    });
  }

function showModal(item){
  let modalContainer = document.querySelector('.modal-container');
  let modalBody = $('.modal-body');
     let modalTitle = $('.modal-title');
 
     modalTitle.empty();
     modalBody.empty();
 
     let nameElement = $('<h1>'+ item.name + '</h1>');
     let imageElement = $('<img class="imageUrl" style="width:50%">');
     imageElement.attr("src", item.imageUrl);
    
 
     let heightElement = $("<p>" + "height : " + item.height + "</p>");
     let weightElement = $("<p>" + "weight : " + item.weight + "</p>");

     let typeElement = "";
     if (item.types.length > 0) {
       let types = ""
       item.types.forEach(function(t) {
        console.log(t)
        types += t.type.name + " "; 
    });
      typeElement = $(`<p>type : ${types}</p>`);
    }
     modalTitle.append(nameElement);
     modalBody.append (imageElement);
     modalBody.append (heightElement);
     modalBody.append (weightElement);
     modalBody.append (typeElement);

    modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    $modalContainer.removeClass("is-visible");
}



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

//pokemonRepository.add({name: "Mew", height: 1.5, type: ["Psychic"] });
//console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
}); 
