import styled from "styled-components";
import { defineBackgroundColorCard } from "./BackgroundPokemons";

export const MainCardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    margin: 0.625rem;
    color: white;
    padding: 1.25rem 0;
    text-transform: capitalize;
  }
`;

export const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 25rem;
  min-width: 18.75rem;
  height: 13.125rem;
  left: 0px;
  top: 0px;
  background: ${(props) => defineBackgroundColorCard(props.typePokemon)};
  border-radius: 0.75rem;
  margin: 1.25rem 0.625rem;
`;
export const ImgPokemon = styled.img`
  max-width: 9.375rem;
  max-height: 9.375rem;
  position: absolute;
  left: 60%;
  bottom: 45%;
`;
export const ImgPokebola = styled.img`
  border-radius: 50%;
  position: absolute;
  width: 10.8rem;
  height: 10.8rem;
  left: 54.5%;
  top: -5%;
  opacity: 0.17;
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.625rem;
  margin-top: 15%;
`;

export const ButtonDetail = styled.button`
  width: 4.625rem;
  height: 1.5rem;
  background-color: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height:1.5rem; 
  flex-grow: 0;
  text-decoration-line: underline;
  border: none;
  cursor: pointer;
  color: #ffffff;
`;

export const ButtonCapturar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  width: 10rem;
  height: 2.375rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-right: 0.625rem;
`;
export const CardIdName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
  margin-top: 0.625rem;
  color: white;
  h3 {
    text-transform: capitalize;
  }
`;
export const Type = styled.div`
  display: flex;
`;
export const DivTypImg = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0.625rem 0.313rem;
`;
export const ImgType = styled.img`
  width: 6.188rem;
  height: 1.938rem;
  margin-right: 0.01rem;
`;

export const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
`;
