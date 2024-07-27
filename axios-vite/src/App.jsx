/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);

  axios
    .get(" https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
      console.log(res.data.results);
      setPokemonList(res.data.results);
    })
    .catch((err) => console.log(err));

  return <div className="App">API Pokémon</div>;
}

export default App;
