import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL.js";
import { goToDetailPokemon } from "../routes/coordinator";

function ListPokemons() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);
  const [novaListaPokemon, setNovaListaPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}pokemon?limit=20&offset=0`)
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
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response) => {
          listaPokemon.push(response.data);
          if (listaPokemon.length === 20) {
            setNovaListaPokemon(listaPokemon);
          }
        })
        .catch((error) => {});
    });
  }, [listPokemons]);
  console.log(novaListaPokemon);

  
  const infoPokemon =
    novaListaPokemon &&
    novaListaPokemon.map((pokemon) => {
      console.log(pokemon.types)
      return (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
          <p>{pokemon.types["name"]}</p>
          <img src={pokemon.sprites.front_default} alt="Imagem do pokemon" />
        </div>
      );
    });
    
  return (
    <div>
      <h1>Lista de Pokemons</h1>
      <button onClick={() => goToDetailPokemon(navigate)}>Detalhes</button>
      {infoPokemon}
    </div>
  );
}
export default ListPokemons;
