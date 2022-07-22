import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonCapturar,
  CardButton,
  CardIdName,
  CardPokemon,
  ContainerPokemon,
  MainCardPokemon,
  Type,
} from "../components/StyledListPokemons.js";
import { BASE_URL } from "../constants/BASE_URL";
import { goToDetailPokemon } from "../routes/coordinator";
import { GlobalContext } from "../global/GlobalContext";

function ListPokemons() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);
  const [capturedPokemons, setCapturedPokemons] = useState([])

  const { novaListaPokemon, setNovaListaPokemon } = useContext(GlobalContext);
  const { pokedex, setPokedex } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}pokemon?limit=30&offset=0`)
      .then((response) => {
        // console.log(response.data.results)
        setListPokemons(response.data.results);
      })
      .catch((error) => {
        // console.log(error.response)
      });
  }, []);
  useEffect(() => {
    const listaPokemon = [];
    listPokemons.forEach((pokemon) => {
      axios
        .get(`${BASE_URL}pokemon/${pokemon.name}`)
        .then((response) => {
          listaPokemon.push(response.data);
          if (listaPokemon.length === 20) {
            setNovaListaPokemon(listaPokemon);
          }
        })
        .catch((error) => {});
    });
    const pokes = JSON.stringify(listPokemons);
    pokes && localStorage.getItem("listPokemons", pokes);
  }, [listPokemons]);

  const getPokemon = (pokemon) => {
    const userPokemons = pokedex;
    userPokemons.push(pokemon);
    setPokedex(userPokemons);

    let pokemonInfo = capturedPokemons
    pokemonInfo.push(pokemon.name)
    setCapturedPokemons(pokemonInfo)

    alert("POKEMON CAPTURADO!");
  };

  const infoPokemon =
    novaListaPokemon &&
    novaListaPokemon.sort(function (a,b) {
      if (a.id > b.id) {
        return 1
      }
      if (a.id < b.id) {
        return-1
      }
    }).map((pokemon) => {

      console.log(capturedPokemons)
      let button
      if (capturedPokemons.includes(pokemon.name)){
        button = <ButtonCapturar onClick = {() => getPokemon(pokemon)}>Remover!</ButtonCapturar>
      } else {
        button =<ButtonCapturar onClick = {() => getPokemon(pokemon)}>Capturar!</ButtonCapturar>
      }

      return (
        <CardPokemon key={pokemon.id} typePokemon={pokemon.types[0].type.name}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="Imagem do pokemon"
          />
          <CardIdName>
            #{pokemon.id}
            <h3>{pokemon.name}</h3>
          </CardIdName>
          <Type typePokemon={pokemon.types[0].type.name}>                      
            {pokemon.types.map((type, index) => {      
              return <div key={index}>{type.type.name}</div>;
            })}
          </Type>
          <CardButton>
            <ButtonCapturar onClick={() => goToDetailPokemon(navigate)}>
              Detalhes
            </ButtonCapturar>
            {button}
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
