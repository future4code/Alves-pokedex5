import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListPokemons, goToPokedex } from "../routes/coordinator";

const Header = () => {
  const navigate = useNavigate();
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navibar-img" />
      </div>
      <button onClick={() => goToListPokemons(navigate)}>Todos Pokémons</button>
      <button onClick={() => goToPokedex(navigate)}>Pokedéx</button>
    </div>
  );
};
export default Header;
