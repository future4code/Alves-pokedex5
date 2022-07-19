import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListPokemons, goToPokedex } from "../routes/coordinator";
import { ButtonPokedex, NaviBar } from "./StyledHeader";

const Header = () => {
  const navigate = useNavigate();
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <NaviBar>
      <button onClick={() => goToListPokemons(navigate)}>Todos Pokémons</button>
      <div>
        <img alt="pokeapi-logo" src={logoImg} />
      </div>
      <ButtonPokedex onClick={() => goToPokedex(navigate)}>Pokedéx</ButtonPokedex>
    </NaviBar>
  );
};
export default Header;
