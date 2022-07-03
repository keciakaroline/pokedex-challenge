import React from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

export default function Pokedex({
  pokemons,
  loading,
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
    <Box
      style={{
        marginTop: "100px",
        width: "100%",
        height: "100%",
      }}
    >
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
        <Grid
          container
          spacing={2}
          style={{ textAlign: "center", padding: "50px 10px 0px 10px" }}
          className="Pokedex-container"
        >
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
        </Grid>
      )}
    </Box>
  );
}
