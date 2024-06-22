
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
      return responde.json().then(err => {throw new Error(err.message)}) 
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
    type2.innerHTML = "___";
    type2.innerHTML = jsonResponse.types[1].type.name;
    
  })
  .catch(error =>{
    console.log(error);
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





// Event Listener Music 


playButton.addEventListener("click", ()=> sound.play());


pauseButton.addEventListener("click", ()=> sound.pause());


window.onload = function() {
  sound.play();
};


