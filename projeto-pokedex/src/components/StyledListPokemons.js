import styled from "styled-components";

export const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 210px;
  left: 0px;
  top: 0px;
  background: #729f92;
  border-radius: 12px;
  margin: 10px;
  img {
    width: 220px;
    position: relative;
    left: 40%;
    bottom: 45%;
  }
  button {
    width: 80px;
    position: relative;
    left: 5%;
    bottom: 80%;
  }
`;
export const MainCardPokemon = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
`;
