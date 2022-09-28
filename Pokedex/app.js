const container = document.querySelector("#poke-container")
const num_of_fetches = 100;

    const fetchMultiplePokes = async () =>{
        for (let i=1; i <= num_of_fetches; i++){
            await getPokemon(i);
        }
    } 
    const getPokemon = async id => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const responce = await fetch(url)
        const data = await responce.json();
        console.log(data)
    }
    
    fetchMultiplePokes();