import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToListPokemons } from "../routes/coordinator";

function DetailPokemon() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Pokemons</h1>
      <button onClick={() => goToListPokemons(navigate)}>Todos Pokémons</button>
      <button onClick={() => goToBack(navigate)}>Pokedéx</button>
    </div>
  );
}
export default DetailPokemon;
