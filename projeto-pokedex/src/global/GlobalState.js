import React, { useState } from "react";
//import useRequestData from "../../hooks/useRequestData";

import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
  const [novaListaPokemon, setNovaListaPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([])

    const values = {
    novaListaPokemon,
    setNovaListaPokemon,
    pokedex,
    setPokedex
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
