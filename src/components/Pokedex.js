import React from "react";
import { CircularProgress } from "@mui/material";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import { Main } from "./styles/Pokedex.styled";

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
    <>
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
        <CircularProgress />
      ) : (
        <Main>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
        </Main>
      )}
    </>
  );
}
