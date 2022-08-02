import React from "react";
import {
  SubTitle,
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
            <SubTitle>#{pokemon.id}</SubTitle>
            <SubTitle>{pokemon.name}</SubTitle>
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
