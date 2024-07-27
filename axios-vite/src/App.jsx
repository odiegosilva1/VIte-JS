/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axiosInstance from "./helpers/axios-instance";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);

  // Chama apenas uma vez
  useEffect(() => {
    axiosInstance
      .get("pokemon")
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
