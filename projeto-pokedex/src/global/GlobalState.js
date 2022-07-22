import React, { useEffect, useState } from "react";
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

  useEffect(()=> {
    const local = localStorage.getItem("pokedex")
    const novaLocal = JSON.parse(local)
    novaLocal && setPokedex(novaLocal)
    // const listaLocal = JSON.parse(localStorage.getItem("pokedex")) 
    // listaLocal && setPokedex(listaLocal)
  }, [])


  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
