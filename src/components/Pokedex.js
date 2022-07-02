import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";

import "./styles/Pokedex.css";

export default function Pokedex({
  pokemons,
  setPokemons,
  loading,
  setLoading,
}) {
  return (
    <Box className="Box">
      {loading ? (
        <CircularProgress style={{ marginTop: 100 }} />
      ) : (
        <Grid container spacing={2} className="Pokedex-container">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
        </Grid>
      )}
      {/* <Pagination count={10} /> */}
    </Box>
  );
}
