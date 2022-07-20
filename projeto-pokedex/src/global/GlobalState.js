import React, { useState } from "react";
//import useRequestData from "../../hooks/useRequestData";

import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
    const [novaListaPokemon, setNovaListaPokemon] = useState([]);

  

  const values = {
    novaListaPokemon,
    setNovaListaPokemon,
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
