import React, { useState, useEffect, useContext } from "react";
import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import FavoriteContext from "../contexts/favoritesContext";
import {
  Name,
  Title,
  SubTitle,
  Main,
  Details,
  Section,
  Hr,
} from "./styles/PokemonDetails.styled";

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const favoritePokemonsNames = favoritePokemons.map((pokemon) => pokemon.name);

  const getPokemonDetail = async (name) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await fetch(url);
      const data = await response.json();

      setPokemonDetail(data);
    } catch (error) {
      console.log("fetchPokemonError: ", error);
    }
  };

  useEffect(() => {
    getPokemonDetail(name);
  }, []);

  // add pokemon to favorite list
  const addPokemonToFavorite = () => {
    // console.log("favorited");
    updateFavoritePokemons(pokemonDetail);
  };

  if (!pokemonDetail) return null;

  return (
    <Main>
      <Name>
        {pokemonDetail.name}
        <IconButton
          onClick={addPokemonToFavorite}
          size="large"
          color="inherit"
          aria-label="add to favorites"
        >
          <Favorite
            color={
              favoritePokemonsNames.includes(pokemonDetail.name)
                ? `error`
                : `disabled`
            }
          />
        </IconButton>
      </Name>
      <img
        width="350px"
        height="auto"
        src={pokemonDetail.sprites.front_default}
        alt={pokemonDetail.name}
      />
      <Details>
        <Section>
          <Title>Type:</Title>
          <SubTitle>
            {pokemonDetail.types.map((type, index) => {
              return <div key={index}>{type.type.name},</div>;
            })}
          </SubTitle>
        </Section>

        <Section>
          <Title>Height:</Title>
          <SubTitle>
            <div>{pokemonDetail.height}</div>
          </SubTitle>
        </Section>

        <Section>
          <Title>Weight:</Title>
          <SubTitle>
            <div>{pokemonDetail.weight}</div>
          </SubTitle>
        </Section>

        <Section>
          <Title>Base Exp:</Title>
          <SubTitle>
            <div>{pokemonDetail.base_experience}</div>
          </SubTitle>
        </Section>

        <Section>
          <Title>Abilities:</Title>
          <SubTitle>
            <div>
              {pokemonDetail.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </div>
          </SubTitle>
        </Section>
      </Details>
      <Hr></Hr>
      <Details>
        {pokemonDetail.stats &&
          pokemonDetail.stats.map((stat, idx) => {
            return (
              <Section key={idx}>
                <Title>{stat.stat.name}</Title>
                <SubTitle>{stat.base_stat}</SubTitle>
              </Section>
            );
          })}
      </Details>
    </Main>
  );
}
