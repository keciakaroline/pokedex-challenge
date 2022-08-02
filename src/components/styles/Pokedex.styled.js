import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
  padding: 50px 30px 30px 30px;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 10px;
  justify-items: stretch;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-evenly;
  grid-auto-flow: row;
`;
