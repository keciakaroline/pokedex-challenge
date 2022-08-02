import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-color: #c80000;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  padding-left: 15px;
`;
