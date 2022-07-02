import React from "react";
import { Typography, Container } from "@mui/material";

export default function PokemonDetails({ pokemon, pokemons }) {
  return (
    <div style={{ marginTop: 100 }}>
      teste
      {pokemon.name}
      <Container>
        {/* <img width="100%" height="auto" src="/" alt="/" />

        <Typography variant="h2">
          {selectedPokemonDetails?.species.name}
        </Typography>

        <Typography>
          {selectedPokemonDetails?.types
            .map((type) => {
              return type.type.name;
            })
            .join(", ")}
        </Typography>

        <div>{selectedPokemonDetails?.height}</div>
        <div>{selectedPokemonDetails?.weight}</div>
        <div>{selectedPokemonDetails?.base_experience}</div>

        <div>
          {selectedPokemonDetails?.abilities
            .map((ability) => ability.ability.name)
            .join(", ")}
        </div> */}
      </Container>
    </div>
  );
}
