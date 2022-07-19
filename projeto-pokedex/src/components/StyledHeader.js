import styled from "styled-components";

export const NaviBar = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* position: absolute;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;
  border: solid 1px black; */

  background: #ffffff;
  img {
    position: absolute;
    width: 307px;
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

  /* position: absolute; */
  width: 287px;
  height: 74px;
  right: 10px;
  top: 41px;

  background: #33a4f5;
  border-radius: 8px;
`;
