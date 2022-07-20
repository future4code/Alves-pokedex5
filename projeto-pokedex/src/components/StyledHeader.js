import styled from "styled-components";

export const NaviBar = styled.div`
  /* height: 100px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* position: absolute;
  height: 160px;
  left: 0px;
  top: 0px;
  border: solid 1px black; */

  background: #ffffff;
  img {
    /* position: absolute; */
    max-width: 307px;
    min-width: 100px;
    height: 113px;
    left: 566px;
    top: 21px;
    

  }
`;
export const ButtonPokedex = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  font-size: 2em;

  /* position: absolute; */
  /* width: 200px; */
  height: 74px;
  right: 10px;
  top: 41px;

  background: #33a4f5;
  border-radius: 8px;
`;
