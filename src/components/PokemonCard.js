import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

import "./styles/PokemonCard.css";

export default function PokemonCard({ pokemon, index }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography component="div" variant="h6" className="Typography">
            #{pokemon.id}
          </Typography>
          <Typography component="div" variant="h6" className="Typography">
            {pokemon.name}
          </Typography>
          {/* <Typography component="div" variant="h6" className="Typography">
            {pokemon.types.map((type, index) => {
              return <div key={index}>{type.type.name}</div>;
            })}
          </Typography> */}
        </CardContent>
        <Link
          to={`/pokemon/${pokemon.name}`}
          className="Link"
          pokemon={pokemon}
        >
          <CardMedia
            image={pokemon.sprites.front_default}
            className="CardMedia"
            alt={pokemon.name}
          ></CardMedia>
        </Link>
      </Card>
    </Grid>
  );
}
