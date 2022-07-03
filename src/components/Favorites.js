import React, { useContext } from "react";
import { Container, Grid } from "@mui/material";
import FavoriteContext from "../contexts/favoritesContext";
import PokemonCard from "./PokemonCard";

export default function Favorites() {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <div
      style={{
        marginTop: "100px",
        width: "100%",
        height: "100%",
        marginLeft: "10px",
      }}
    >
      {favoritePokemons >= 0 ? (
        <h1>You don't have any favorites...</h1>
      ) : (
        <Container>
          <div>
            <Grid container spacing={2}>
              Favorites
              {favoritePokemons &&
                favoritePokemons.map((pokemon, index) => (
                  <PokemonCard pokemon={pokemon} key={index} />
                ))}
            </Grid>
          </div>
        </Container>
      )}
    </div>
  );
}
