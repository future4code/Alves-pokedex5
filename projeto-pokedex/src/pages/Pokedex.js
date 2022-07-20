import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import {goToDetailPokemon, goToBack} from "../routes/coordinator"
import { CardPokemon, ContainerPokemon } from "../components/StyledListPokemons";

function Poquedex() {

  const {pokedex, setPokedex } = useContext(GlobalContext)
  console.log(pokedex)

  const navigate = useNavigate()

  const myPokemons = pokedex.map((pokemon) => {
    return (
    <CardPokemon key={pokemon.id}>          
    <p>{pokemon.name}</p>
  
    <img src={pokemon.sprites.front_default} alt="Imagem do pokemon" />
    <div>
      {pokemon.types.map((type, index) => {
        return <div key={index}>{type.type.name}</div>
      })}
    </div>
    <button onClick={() => goToDetailPokemon(navigate)}>Detalhes</button>          
    <button onClick >Remover</button>
  </CardPokemon>
    )
  })



  return (
    <div>
      <h1>Meus Pokémons</h1>
      <ContainerPokemon>{myPokemons}</ContainerPokemon>
      <button onClick={() => goToDetailPokemon(navigate)}>Detalhes</button>
    </div>
  );
}
export default Poquedex
