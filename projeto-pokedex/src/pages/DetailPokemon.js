import React, { useContext,useEffect,useParams } from "react";
import { useNavigate } from "react-router-dom";
//import { goToBack, goToListPokemons } from "../routes/coordinator";
import { GlobalContext } from "../global/GlobalContext"
import { MainCardPokemon, ContainerPokemon, CardPokemon } from "../components/StyledDetailPokemon"





function DetailPokemon() {
  //const navigate = useNavigate();
  const params = useParams()
  const { novaListaPokemon, setNovaListaPokemon } = useContext(GlobalContext);

 


  const renderLista = novaListaPokemon.map((detalhes) => {
    console.log(detalhes)
    return <CardPokemon key={detalhes.id}>
      <p>{detalhes.name}</p>
      <img src={detalhes.sprites.front_default} alt="Imagem do pokemon" />

      <div>
        
        {detalhes.types.map((type, index) => {
          return <div key={index}>
            {type.type.name}
           
          
            <div>

              <h2>Moves</h2>
              {detalhes.moves.map((move, index) => {
                return (index < 5 && <div key={move.move.name}>
                  <ul>
                    <li>{move.move.name}</li>
                  </ul>
                </div>)
              })}
            </div>


            <div>
              <h2>states</h2>
              {detalhes.stats.map((stat) => {
                return <div key={stat.stat.name}>
                  <strong>{stat.stat.name}</strong>
                  <p>{stat.base_stat}</p>
                </div>
              })}
            </div>
          </div>
        })}

      </div>

    </CardPokemon>

  })


  return (
    <MainCardPokemon>
      <h1>Pokemons detalhes</h1>
      <ContainerPokemon> {renderLista}</ContainerPokemon>
    </MainCardPokemon>
  );
}
export default DetailPokemon;
