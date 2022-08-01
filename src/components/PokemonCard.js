import React from "react";

import {
  Name,
  CardImage,
  CardInfo,
  Card,
  CardLink,
} from "./styles/PokemonCard.styled";

export default function PokemonCard({ pokemon }) {
  // console.log(pokemon);
  return (
    <>
      <CardLink to={`/pokemon/${pokemon.name}`}>
        <Card>
          <CardInfo>
            <Name>#{pokemon.id}</Name>
            <Name>{pokemon.name}</Name>
          </CardInfo>

          <CardImage
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          ></CardImage>
        </Card>
      </CardLink>
    </>
  );
}
