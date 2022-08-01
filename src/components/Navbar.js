import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Header, StyledLink, Title } from "./styles/Navbar.styled";
import FavoriteContext from "../contexts/favoritesContext";

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <Header>
      <StyledLink to="/">
        <Title>Pokedex</Title>
      </StyledLink>
      <StyledLink to="/favorites">
        <Title>Favorites ({favoritePokemons.length})</Title>
      </StyledLink>
    </Header>
  );
}
