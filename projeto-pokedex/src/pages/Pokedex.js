import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import {goToDetailPokemon, goToBack} from "../routes/coordinator"
import {
  ButtonCapturar,
  ButtonDetail,
  CardButton,
  CardIdName,
  CardPokemon,
  ContainerPokemon,
  ImgPokebola,
  ImgPokemon,
  Type,
} from "../components/StyledListPokemons.js";
import TypePokemon from "../components/TypePokemon.js";
import pokebola2 from "../imageTypes/pokebola2.png";

function Pokedex(props) {

  const {pokedex, setPokedex } = useContext(GlobalContext)
  const {capturedPokemons, setCapturedPokemons} = useContext(GlobalContext)

  console.log(pokedex)

  const navigate = useNavigate()

  const myPokemons = Object.keys(pokedex).map((pokemonId) => {

    let isPokemonCaptured = Boolean(pokemonId in capturedPokemons)
    let pokemon = pokedex[pokemonId]


    return (
      <CardPokemon
        key={pokemon.id}
        typePokemon={pokemon.types[0]?.type.name}
      >
        <ImgPokebola src={pokebola2} />
        <ImgPokemon
          src={
            pokemon["sprites"]["other"]["official-artwork"]["front_default"]
          }
          alt={pokemon.name}
        />
        <CardIdName>
          #{pokemon.id}
          <h3>{pokemon.name}</h3>
        </CardIdName>
        <Type typePokemon={pokemon.types[0]?.type.name}>
          {pokemon.types.map((type, index) => {

            let typePokemon=type.type.name
            return <TypePokemon key={index} typePokemon={typePokemon}/>

          })}
        </Type>
        <CardButton>
          <ButtonDetail onClick={() => goToDetailPokemon(navigate)}>
            Detalhes
          </ButtonDetail>
          <ButtonCapturar>
            Remover 
          </ButtonCapturar>
        </CardButton>
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
export default Pokedex
