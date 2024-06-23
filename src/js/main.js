
/*--------------------------------------------------------------
#                           Data 
--------------------------------------------------------------*/

const searchButton = document.querySelector('.black-button');
const inputField = document.querySelector('.id-input'); // id or name field 
const imagePokemon = document.querySelector('.pokemon-picture');
const namePokemon = document.getElementById('name');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const type1 = document.getElementById('type-1');
const type2 = document.getElementById('type-2');

const directionalRigth = document.querySelector('.directional-right')

//Data of Music 
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton')
let sound = new Audio('./public/sound/pokemonIntro.mp3');
sound.volume = 0.55;


/*--------------------------------------------------------------
#                      Change Fields
--------------------------------------------------------------*/

const changeFields = ()=>{

  namePokemon.innerHTML = "";
  height.innerHTML = "";
  weight.innerHTML = "";
  type1.innerHTML = "";
  type2.innerHTML = ""; 
}


/*--------------------------------------------------------------
#                           API
--------------------------------------------------------------*/


const handleSearchPokemon = (id)=>{

  changeFields();

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then( response => {
    if(!response.ok){
      return response.json().then(err => {throw new Error(err.message)}) 
    }
    return response.json()
  })
  .then(jsonResponse =>{
    console.log(jsonResponse); // es para ver en consola los datos que llegaron de la api
    imagePokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${jsonResponse.id}.png`;
    namePokemon.innerHTML = jsonResponse.name;
    height.innerHTML = `${(jsonResponse.height/10)} m`;
    weight.innerHTML = `${(jsonResponse.weight/10)} kg`;
    type1.innerHTML = jsonResponse.types[0].type.name;

    type1Name = jsonResponse.types[0].type.name; // variable for color change in background
    updateBackgroundColor(type1Name); // function that allows us to change the background

    type2.innerHTML = jsonResponse.types[1] ? jsonResponse.types[1].type.name : "___";

    
  })
  .catch(error =>{
    namePokemon.innerHTML =` ${inputField.value} not found`
    height.innerHTML = `?`;
    weight.innerHTML = `?`;
    const body = document.body;
    body.style.backgroundColor = 'var(--white)';
    imagePokemon.src = "./public/images/pokedexScreen/errorScren2.jpg";
  })

}


/*--------------------------------------------------------------
#                     Event Listener
--------------------------------------------------------------*/

inputField.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    searchButton.click();
  }
})

searchButton.addEventListener("click", ()=> handleSearchPokemon(inputField.value))



const updateBackgroundColor = (type)=>{

  const body = document.body;

  if(type === "grass"){
    return body.style.backgroundColor = 'var(--type-grass)';
  }

  if(type === "fire"){
    return body.style.backgroundColor = 'var(--type-fire)';
  }

  if(type === "water"){
    return body.style.backgroundColor = 'var(--type-water)';
  }

  if(type === "bug"){
    return body.style.backgroundColor = 'var(--type-bug)';
  }

  if(type === "normal"){
    return body.style.backgroundColor = 'var(--type-normal)';
  }

  if(type === "poison"){
    return body.style.backgroundColor = 'var(--type-poison)';
  }

  if(type === "electric"){
    return body.style.backgroundColor = 'var(--type-electric)';
  }

  if(type === "ground"){
    return body.style.backgroundColor = 'var(--type-ground)';
  }

  if(type === "fairy"){
    return body.style.backgroundColor = 'var(--type-fairy)';
  }

  if(type === "fighting"){
    return body.style.backgroundColor = 'var(--type-fighting)';
  }

  if(type === "psychic"){
    return body.style.backgroundColor = 'var(--type-psychic)';
  }

  if(type === "rock"){
    return body.style.backgroundColor = 'var(--type-rock)';
  }

  if(type === "ghost"){
    return body.style.backgroundColor = 'var(--type-ghost)';
  }

  if(type === "ice"){
    return body.style.backgroundColor = 'var(--type-ice)';
  }

  if(type === "dragon"){
    return body.style.backgroundColor = 'var(--type-dragon)';
  }

  if(type === "dark"){
    return body.style.backgroundColor = 'var(--type-dark)';
  }

  if(type === "steel"){
    return body.style.backgroundColor = 'var(--type-steel)';
  }

  if(type === "flying"){
    return body.style.backgroundColor = 'var(--type-flying)';
  }

  return body.style.backgroundColor = 'var(--white)';
}



// Event Listener Music 


playButton.addEventListener("click", ()=> sound.play());


pauseButton.addEventListener("click", ()=> sound.pause());

