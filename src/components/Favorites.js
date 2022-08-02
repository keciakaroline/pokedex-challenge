import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import PokemonCard from "./PokemonCard";
import { Main } from "./styles/Pokedex.styled";

export default function Favorites() {
  const { favoritePokemons } = useContext(FavoriteContext);
  //console.log(favoritePokemons);

  return (
    <>
      {favoritePokemons >= 0 ? (
        <h1>You don't have any favorites...</h1>
      ) : (
        <Main>
          {favoritePokemons &&
            favoritePokemons.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
        </Main>
      )}
    </>
  );
}
