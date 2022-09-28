const row = document.querySelector(".row-1")
const num_of_fetches = 40;

    const fetchMultiplePokes = async () =>{
        for (let i=1; i <= num_of_fetches; i++){
            await getPokemon(i);
        }
    } 
    const getPokemon = async id => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const responce = await fetch(url)
        const data = await responce.json();
        createCard(data)
    }
    
    const createCard = (data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("card");
        const {id, name, sprites, types} = data;
        const type = types[0].type.name
        const pokemonInnerHtml =  ` 
          <div class="card-icon">
            <img src="${sprites.front_default}" alt="${name}">
          </div>
         <div class="card-text">
            <h2>${name}</h2>
            <p>Type:${type}</p>
         </div>
    `;
    pokemonCard.innerHTML=pokemonInnerHtml;
        row.appendChild(pokemonCard);
    }
    fetchMultiplePokes()