getpokemon();

async function getpokemon() {
  try {
    const pokemonName = document
      .getElementById('pokemonName')
      .value.toLowercase();
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!pokemon.ok) {
      throw new Error('could not fetch resource'); // throw error if we cannot find pikachu/ reponse
    }
    let pdata = await pokemon.json(); // converts data to json data format. if no await it will be empty promise
    console.log(pdata);
  } catch (error) {
    console.error(error);
  }
}

// getpokemon();
// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('could not fetch resource'); // throw error if we cannot find pikachu/ reponse
//     }
//     return response.json(); // converts data to json data format
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
