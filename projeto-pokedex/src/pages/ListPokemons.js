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
import TypePokemon from "../components/TypePokemon.js";

function ListPokemons() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);

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
        console.log(error.response)
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
        .catch((error) => {
          console.log(error.response)
        });
    });
    const pokes = JSON.stringify(listPokemons);
    pokes && localStorage.getItem("listPokemons", pokes);
  }, [listPokemons]);

  const getPokemon = (pokemon) => {
    const userPokemons = pokedex;
    userPokemons.push(pokemon);
    // setPokedex(userPokemons)
    alert("POKEMON CAPTURADO!");
    // localStorage.getItem("pokedex") &&
    //   setPokedex(JSON.parse(localStorage.getItem("pokedex")));
    localStorage.setItem("pokedex", JSON.stringify(pokedex))

    console.log(pokedex);
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
        console.log(pokemon);
        console.log(pokemon.types[0].type.name);
        return (
          <CardPokemon
            key={pokemon.id}
            typePokemon={pokemon.types[0]?.type.name}
          >
            <img
              src={pokemon.sprites?.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <CardIdName>
              #{pokemon.id}
              <h3>{pokemon.name}</h3>
            </CardIdName>
            <Type typePokemon={pokemon.types[0]?.type.name}>
              {pokemon.types.map((type, index) => {
                console.log(type);
                let typePokemon=type.type.name
                // return <div key={index}>{type.type.name}</div>;
                return <TypePokemon key={index} typePokemon={typePokemon}/>
              })}
            </Type>
            <CardButton>
              <button onClick={() => goToDetailPokemon(navigate)}>
                Detalhes
              </button>
              <ButtonCapturar onClick={() => getPokemon(pokemon)}>
                Capturar!
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
