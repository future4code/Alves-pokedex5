import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToListPokemons } from "../routes/coordinator";

function DetailPokemon() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Pokemons detalhes</h1>
    </div>
  );
}
export default DetailPokemon;
