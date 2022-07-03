import React, { useState, useEffect, useContext } from "react";
import { Typography, Container, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import FavoriteContext from "../contexts/favoritesContext";

import "./styles/PokemonDetails.css";

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
    <Container
      style={{
        marginTop: 100,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="pokemon-name-favorite">
        <Typography
          component="div"
          variant="h6"
          style={{
            fontSize: "36px",
            textTransform: "capitalize",
            textDecoration: "underline",
          }}
        >
          {pokemonDetail.name}
        </Typography>
        <IconButton
          onClick={addPokemonToFavorite}
          size="large"
          color="inherit"
          aria-label="add to favorites"
          style={{ marginLeft: "10px" }}
        >
          <Favorite
            color={
              favoritePokemonsNames.includes(pokemonDetail.name)
                ? `error`
                : `disabled`
            }
          />
        </IconButton>
      </div>

      <img
        width="350px"
        height="auto"
        src={pokemonDetail.sprites.front_default}
        alt={pokemonDetail.name}
      />
      <div className="pokemon-details">
        <Typography variant="h6" className="pokemon-details-info">
          Type:
        </Typography>
        <Typography variant="h6" className="pokemon-details">
          {pokemonDetail.types.map((type, index) => {
            return <div key={index}>{type.type.name}</div>;
          })}
        </Typography>
      </div>

      <div className="pokemon-details">
        <Typography variant="h6" className="pokemon-details-info">
          Height:
        </Typography>
        <Typography component="div" variant="h6" className="pokemon-details">
          <div>{pokemonDetail.height}</div>
        </Typography>
      </div>

      <div className="pokemon-details">
        <Typography variant="h6" className="pokemon-details-info">
          Weight:
        </Typography>
        <Typography component="div" variant="h6" className="pokemon-details">
          <div>{pokemonDetail.weight}</div>
        </Typography>
      </div>

      <div className="pokemon-details">
        <Typography variant="h6" className="pokemon-details-info">
          Base Exp:
        </Typography>
        <Typography component="div" variant="h6" className="pokemon-details">
          <div>{pokemonDetail.base_experience}</div>
        </Typography>
      </div>

      <div className="pokemon-details">
        <Typography variant="h6" className="pokemon-details-info">
          Abilities:
        </Typography>
        <Typography component="div" variant="h6" className="pokemon-details">
          <div>
            {pokemonDetail.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </div>
        </Typography>
      </div>

      <div className="pokemon-details-stats">
        {pokemonDetail.stats &&
          pokemonDetail.stats.map((stat, idx) => {
            return (
              <div key={idx}>
                <div className="stats">{stat.stat.name}</div>
                <div className="stats">{stat.base_stat}</div>
              </div>
            );
          })}
      </div>
    </Container>
  );
}
