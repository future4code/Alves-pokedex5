import React from "react";
import { useNavigate } from "react-router-dom";
import {goToDetailPokemon, goToBack} from "../routes/coordinator"

function Poquedex() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Meus Pokémons</h1>      
      <button onClick={() => goToDetailPokemon(navigate)}>Detalhes</button>
    </div>
  );
}
export default Poquedex
