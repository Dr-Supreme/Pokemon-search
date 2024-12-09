
let pokemonFound = false;
async function getPokemon(){ //function declaration and call

    // this gets the value the user types in as an input and puts it as lowercase and also console.logs the name out
    let pokemonName = document.getElementById('pokemonName').value.toLowerCase(); 
    console.log(pokemonName);

    // try/catch block to get pokemon data
    try{

        // this is the api fetch call to get the pokemon that the users typed. replace the last part of url w/ pokemon name to search that specific pokemon
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        //if no pokemon was found (!pokemon.ok) then we throw an error
        if(!pokemon.ok){ 
            throw new Error("could not fetch resource");
        }

        //transform the response/pokemon into json() format and then print the data to the console.
        let pokedex = await pokemon.json();
        console.log(pokedex);

        //used to show the pic of the pokemon by getting the properties of the pokemon object.
        let pokemonpic = pokedex.sprites.front_default;
        let imgE = document.getElementById('pokemonPic');
        imgE.src = pokemonpic;
        imgE.style.display = "block"

        showPokemon(pokedex);

    }catch(error){
        console.log(error);
    }
}

//this function populates the html to show the pokemon data
function showPokemon(pokemon){

    //This puts the pokemon data into the right fields in the html.
    console.log(pokemon);
    let card = document.getElementById("pokeCard");
    card.textContent = pokemon.name;

    // this fills the pokeabailities array with a list of their abilites and puts it in the html
    let pokeAblities = [];
    for(let a of pokemon.abilities){
        pokeAblities.push(" " + a.ability.name);
    }
    let card2 = document.getElementById("pokeAblities");
    card2.textContent = pokeAblities;

    // this fills the pokeType array with a list of their types and puts it in the html
    let pokeType = [];
    for(let t of pokemon.types){
        pokeType.push(" " + t.type.name);
    }
    let card3 = document.getElementById("pokeType");
    card3.textContent = pokeType;
    console.log(pokeType)

    //This puts the pokemon height into the right fields in the html.
    let card4 = document.getElementById("pokeHeight");
    card4.textContent = pokemon.height;

}