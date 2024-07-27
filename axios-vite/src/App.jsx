/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);

  // Chama apenas uma vez
  useEffect(() => {
    axios
      .get(" https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemonList(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {pokemonList.map((pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  );
}

export default App;
