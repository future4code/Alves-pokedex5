import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon, ContainerPokemon, MainCardPokemon } from "../components/StyledListPokemons.js";
import { BASE_URL } from "../constants/BASE_URL";
import { goToDetailPokemon } from "../routes/coordinator";

function ListPokemons() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);
  const [novaListaPokemon, setNovaListaPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([])

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
        .get(`${BASE_URL}pokemon/${pokemon.name}`)
        .then((response) => {
          listaPokemon.push(response.data);
          if (listaPokemon.length === 20) {
            setNovaListaPokemon(listaPokemon);
          }
        })
        .catch((error) => {});
    });
  }, [listPokemons]);

  const getPokemon = (pokemon) => {
    const userPokemons = pokedex
    userPokemons.push(pokemon)
    setPokedex(userPokemons)
    
    console.log(pokedex)
  }
  

  
  const infoPokemon =
    novaListaPokemon &&
    novaListaPokemon.map((pokemon) => {
      // console.log(pokemon)
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
          <button onClick = {() => getPokemon(pokemon)}>Capturar!</button>
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
