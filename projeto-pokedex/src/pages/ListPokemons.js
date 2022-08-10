import axios from "axios";
import Pokedex from "./Pokedex.js";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonCapturar,
  ButtonDetail,
  CardButton,
  CardIdName,
  CardPokemon,
  ContainerPokemon,
  ImgPokebola,
  ImgPokemon,
  MainCardPokemon,
  Type,
} from "../components/StyledListPokemons.js";
import pokebola2 from "../imageTypes/pokebola2.png";
import { BASE_URL } from "../constants/BASE_URL";
import { goToDetailPokemon } from "../routes/coordinator";
import { GlobalContext } from "../global/GlobalContext";
import TypePokemon from "../components/TypePokemon.js";

function ListPokemons() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);


  const {capturedPokemons, setCapturedPokemons} = useContext(GlobalContext)
  const { novaListaPokemon, setNovaListaPokemon } = useContext(GlobalContext);
  const { pokedex, setPokedex } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}pokemon?limit=30&offset=0`)
      .then((response) => {
        setListPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  
  useEffect(() => {
    const listaPokemon = [];
    listPokemons.forEach((pokemon) => {
      axios
        .get(`${BASE_URL}pokemon/${pokemon.name}`)
        .then((response) => {
          listaPokemon.push(response.data);
          if (listaPokemon.length === 30) {
            setNovaListaPokemon(listaPokemon);
          }
        })
        .catch((error) => {});
    });
    const pokes = JSON.stringify(listPokemons);
    pokes && localStorage.getItem("listPokemons", pokes);
  }, [listPokemons]);


  const captureOrRemovePokemon = (pokemon, id) => {
    let newCapturedPokemons = JSON.parse(JSON.stringify(capturedPokemons))
    let pokedexCopy = pokedex

    if (id in newCapturedPokemons) {
      delete newCapturedPokemons[id]
      delete pokedexCopy[id]      

    } else {
      newCapturedPokemons[id] = true;
      pokedexCopy[id] = pokemon;
      alert("POKEMON CAPTURADO!");
    }

    setCapturedPokemons(newCapturedPokemons)
    localStorage.setItem("captured", JSON.stringify(capturedPokemons))
    
    
    localStorage.setItem("pokedex", JSON.stringify(pokedex))
       
  };


  const infoPokemon =
    novaListaPokemon &&
    novaListaPokemon
      .sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
      })
      .map((pokemon) => {

        let isPokemonCaptured = Boolean(pokemon.id in capturedPokemons)

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
              <ButtonCapturar onClick={() => captureOrRemovePokemon(pokemon, pokemon.id)}>
                {isPokemonCaptured ? "Remover " : "Capturar"} 
              </ButtonCapturar>
            </CardButton>
          </CardPokemon>
        );
      });

  return (
    <MainCardPokemon>
      <h1>Lista de Pokemons</h1>
      <ContainerPokemon>{infoPokemon}</ContainerPokemon>
    </MainCardPokemon>
  );
}
export default ListPokemons;
