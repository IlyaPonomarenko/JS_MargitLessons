const row = document.querySelector(".row-1");
const btn_gen2 = document.querySelector(".gen1");
const genButtons = document.querySelectorAll(".button");

const getBtnValue = async (e) => {
  row.innerHTML = "";
  const genNum = e.target.value;
  const genData = await getGen(genNum);
  let amountOfPokes = genData.pokemon_species.length;
  for (let i = 0; i < amountOfPokes; i++) {
    callDatainOrder(genNum, i);
  }
};

for (const genButton of genButtons) {
  genButton.addEventListener("click", getBtnValue);
}

const getGen = async (genNum) => {
  const url = `https://pokeapi.co/api/v2/generation/${genNum}`;
  const responce = await fetch(url);
  const genData = await responce.json();
  return genData;
};
const getSpecies = async (speciesUrl) => {
  const responce = await fetch(speciesUrl);
  const speciesData = await responce.json();
  return speciesData;
};
const getPokemonData = async (pokemonDataUrl) => {
  const responce = await fetch(pokemonDataUrl);
  const pokeData = await responce.json();
  return pokeData;
};

const callDatainOrder = async (genNum, i) => {
  const genData = await getGen(genNum);
  const speciesData = await getSpecies(genData.pokemon_species[i].url);
  const pokeData = await getPokemonData(speciesData.varieties[0].pokemon.url);
  createCard(pokeData);
};

const createCard = (pokeData) => {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card");
  const { name, sprites, types } = pokeData;
  const type = types[0].type.name;
  const pokemonInnerHtml = ` 
          <div class="card-icon">
            <img src="${sprites.other.home.front_default}" alt="${name}">
          </div>
         <div class="card-text">
            <h2>${name}</h2>
            <p>Type: ${type}</p>
         </div>
    `;
  pokemonCard.innerHTML = pokemonInnerHtml;
  row.appendChild(pokemonCard);
};
