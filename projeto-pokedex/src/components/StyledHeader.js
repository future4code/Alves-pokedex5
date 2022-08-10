import styled from "styled-components";

export const NaviBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 10rem;
  position: relative;
`;
export const ContainerImg = styled.div`
  img {
    position: absolute;
    width: 19.188rem;
    height: 7.063rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const ButtonPokedex = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;  
  min-width: 80px;
  left: 80%;
  position: absolute;
  height: 8vh;
  top: 50%;
  transform: translate(-20%, -50%);
  color: white;
  background: #33a4f5;
  border-radius: 8px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  line-height: 2.25rem;
  cursor: pointer;
`;
export const ButtonPokemons = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 13.125rem;
  text-decoration-line: underline;
  position: absolute;
  min-width: 3.75rem;
  right: 75%;  
  top: 50%;
  transform: translate(-20%, -50%);
  color: #080707;
  background-color: white;
  border: none;  
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  cursor: pointer;
`;
export const DeletePokedex = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20%;  
  min-width: 5rem;
  height: 8vh;
  position: absolute;
  left: 80%;
  top: 50%;
  transform: translate(-20%, -50%);
  color: white;
  background: #f0290e;
  border-radius: 0.5rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  line-height: 2.25rem;
  cursor: pointer;
`;
