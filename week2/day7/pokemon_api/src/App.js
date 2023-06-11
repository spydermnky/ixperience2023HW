import "./App.css";
import {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonTable from './components/PokemonTable';
import { Pokemon } from './models/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon";

  //fetch API in function
  async function fetchPokemon() {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    let pokemonData = data.results.map((pokemon) => {
      return new Pokemon(pokemon.name);
    });
    setPokemon(pokemonData);
  }

  return (
    <div className="text-center mt-5 mx-5">
      <button className="btn btn-primary me-1" onClick={fetchPokemon}>
        Fetch Posts
      </button>
      <PokemonTable pokemon={pokemon}></PokemonTable>
    </div>
  );
}

export default App;