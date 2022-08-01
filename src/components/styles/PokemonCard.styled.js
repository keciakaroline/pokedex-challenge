import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  cursor: pointer;
  border: 3px outset #a41c1c;
  border-radius: 10px;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);
  transition: all 1s ease-in-out;

  &:hover {
    background-color: #c80000;
    color: white;
    opacity: 0.9;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CardImage = styled.img`
  margin: auto;
  height: 130px;
  width: 130px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;

  text-transform: capitalize;
  font-weight: 700;
`;

export const Name = styled.div`
  font-size: 18px;
  padding-right: 5px;
  margin-top: 10px;
`;
