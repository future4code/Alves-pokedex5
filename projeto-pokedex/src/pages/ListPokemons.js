import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL.JS";
import { goToDetailPokemon } from "../routes/coordinator";

function ListPokemons() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        // console.log(response.data.results)
        setListPokemons(response.data.results);
      })
      .catch((error) => {
        // console.log(error.response)
      });
  }, []);

  const listPokemon =
    listPokemons &&
    listPokemons.map((pokemon) => {
      // return <div key={pokemon.name}>
      //   <p>{pokemon.name}</p>
      //   <img src={pokemon.url} alt="Imagem do pokemon"/>
      // </div>

      axios
        .get(pokemon.url)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
      return (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
          {/* <img src={} alt="Imagem do pokemon" /> */}
        </div>
      );
    });
  // axios.get(`https://pokeapi.co/api/v2/${listPokemon}`)
  // .then((response) => {
  //   console.log(response.data)
  // }).catch((error) => {
  //   console.log(error.response)
  // })

  console.log(listPokemon);
  return (
    <div>
      <h1>Lista de Pokemons</h1>
      <button onClick={() => goToDetailPokemon(navigate)}>Detalhes</button>
    </div>
  );
}
export default ListPokemons;
