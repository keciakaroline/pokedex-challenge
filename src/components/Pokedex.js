import React from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

import "./styles/Pokedex.css";

export default function Pokedex({
  pokemons,
  setPokemons,
  loading,
  setLoading,
  page,
  setPage,
  totalPages,
}) {
  const onLeftClickHandler = () => {
    //console.log("back");
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    //console.log("front");
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Box className="Box">
      <div>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          setPage={setPage}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
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
    </Box>
  );
}
