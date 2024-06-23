
/*--------------------------------------------------------------
#                           Data 
--------------------------------------------------------------*/

// Main data 

const searchButton = document.querySelector('.black-button');
const inputField = document.querySelector('.id-input'); // id or name field 
const imagePokemon = document.querySelector('.pokemon-picture');
const namePokemon = document.getElementById('name');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const type1 = document.getElementById('type-1');
const type2 = document.getElementById('type-2');


// Data directional-pad

let currentPokemonId = 0; // initial variable for the current pokemon id
const directionalRigth = document.querySelector('.directional-right')
const directionalLeft = document.querySelector('.directional-left')
const directionalUp = document.querySelector('.directional-up')
const directionalDown = document.querySelector(".directional-down")

//Data of Music 
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton')
let sound = new Audio('./public/sound/pokemonIntro.mp3');
sound.volume = 0.55;

// pokemon stats

const pname = document.querySelector('.pname');
const pheight = document.querySelector('.pheight');
const pweight = document.querySelector('.pweight');

const hp = document.getElementById('hp');
const speed = document.getElementById('speed');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const spattack = document.getElementById('spattack');
const spdefense = document.getElementById('spdefense');

const rowdata1 = document.querySelector('.rowdata1');
const rowdata2 = document.querySelector('.rowdata2');
const rowdata3 = document.querySelector('.rowdata3');

const nextInfo = document.getElementById('white-button2')
const backInfo = document.getElementById('white-button1')

let showingPrimaryStats = true; 



/*--------------------------------------------------------------
#                      Change Fields
--------------------------------------------------------------*/

const changeFields = ()=>{

  namePokemon.innerHTML = "";
  height.innerHTML = "";
  weight.innerHTML = "";
  type1.innerHTML = "";
  type2.innerHTML = ""; 

  hp.innerHTML = "";
  attack.innerHTML = "";
  defense.innerHTML = "";
  spattack.innerHTML = "";
  spdefense.innerHTML = "";
  speed.innerHTML = "";
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

    currentPokemonId = jsonResponse.id; //variable for the current pokemon id

    //stats pokemon 
    hp.innerHTML = jsonResponse.stats[0].base_stat;
    attack.innerHTML = jsonResponse.stats[1].base_stat;
    defense.innerHTML = jsonResponse.stats[2].base_stat;
    spattack.innerHTML = jsonResponse.stats[3].base_stat;
    spdefense.innerHTML = jsonResponse.stats[4].base_stat;
    speed.innerHTML = jsonResponse.stats[5].base_stat;
  })
  .catch(error =>{

    const body = document.body;

    namePokemon.innerHTML =` ${inputField.value} not found`
    height.innerHTML = `?`;
    weight.innerHTML = `?`; 
    body.style.backgroundColor = 'var(--white)';
    imagePokemon.src = "./public/images/pokedexScreen/errorScren2.jpg";
  })

}


/*--------------------------------------------------------------
#                     Event Listener
--------------------------------------------------------------*/

// Event search pokemon

inputField.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    searchButton.click();
  }
})

searchButton.addEventListener("click", ()=> handleSearchPokemon(inputField.value))


// Event update Background

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


// Event directional-pad

directionalRigth.addEventListener("click", () => {

  let nextId = currentPokemonId + 1;

  if(nextId > 1025){
    return 0;
  }

  inputField.value = nextId;

  handleSearchPokemon(nextId);
});

directionalUp.addEventListener("click", ()=>{

  let nextId = currentPokemonId + 1;

  if(nextId > 1025){
    return 0;
  }

  inputField.value = nextId;

  handleSearchPokemon(nextId);
})

directionalLeft.addEventListener("click", ()=>{

  let backId = currentPokemonId - 1;

  if(backId < 1){
    return 0; 
  }

  inputField.value = backId;

  handleSearchPokemon(backId);
})

directionalDown.addEventListener("click", ()=>{

  let backId = currentPokemonId - 1;

  if(backId < 1){
    return 0; 
  }

  inputField.value = backId;

  handleSearchPokemon(backId);
})

// Evente listener stats pokemon

const stats = ()=>{

  if (showingPrimaryStats) {
  
    // Hide name, height and weight 
    pname.style.display = 'none';
    pheight.style.display = 'none';
    pweight.style.display = 'none';
    
    // Show stats rows
    rowdata1.style.display = 'inline';
    rowdata2.style.display = 'inline';
    rowdata3.style.display = 'inline';

  } else {
    
    //return to main screen
    pname.style.display = 'inline';
    rowdata1.style.display = 'none';
    
    pheight.style.display = 'inline';
    rowdata2.style.display = 'none';

    pweight.style.display = 'inline';
    rowdata3.style.display = 'none';
  }

  showingPrimaryStats = !showingPrimaryStats;
}

const statsmain = ()=>{

  if(showingPrimaryStats){
    
    return 0;
  }

  if(!showingPrimaryStats){
    pname.style.display = 'inline';
    rowdata1.style.display = 'none';
    
    pheight.style.display = 'inline';
    rowdata2.style.display = 'none';

    pweight.style.display = 'inline';
    rowdata3.style.display = 'none';
  }

  showingPrimaryStats = !showingPrimaryStats;
}

nextInfo.addEventListener("click", ()=> stats());
backInfo.addEventListener("click", ()=> statsmain());


// Event Listener Music 


playButton.addEventListener("click", ()=> sound.play());


pauseButton.addEventListener("click", ()=> sound.pause());

