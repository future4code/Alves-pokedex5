import React from "react";
import { useNavigate } from "react-router-dom";
import {goToDetailPokemon, goToPokedex} from "../routes/coordinator"

function ListPokemons() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Pokemons</h1>
      <button onClick={() => goToPokedex(navigate)}>Pokédex</button>
      <button onClick={() => goToDetailPokemon(navigate)}>Detalhes</button>
    </div>
  );
}
export default ListPokemons;
