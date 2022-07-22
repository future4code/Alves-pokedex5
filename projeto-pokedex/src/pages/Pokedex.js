import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import { goToDetailPokemon, goToBack } from "../routes/coordinator";
import {
  CardPokemon,
  ContainerPokemon,
} from "../components/StyledListPokemons";

function Poquedex() {
  const { pokedex, setPokedex } = useContext(GlobalContext);
  console.log(pokedex);

  const navigate = useNavigate();

  // const listaLocal = JSON.parse(localStorage.getItem("pokedex"))

  const myPokemons = pokedex.map((pokemon) => {
    return (
      <CardPokemon key={pokemon.id}>
        <p>{pokemon.name}</p>

        <img src={pokemon.sprites.front_default} alt="Imagem do pokemon" />
        <div>
          {pokemon.types.map((type, index) => {
            return <div key={index}>{type.type.name}</div>;
          })}
        </div>
        <button onClick={() => goToDetailPokemon(navigate)}>Detalhes</button>
        <button>Remover</button>
      </CardPokemon>
    );
  });

  return (
    <div>
      <h1>Meus Pokémons</h1>
      <ContainerPokemon>{myPokemons}</ContainerPokemon>
    </div>
  );
}
export default Poquedex;
