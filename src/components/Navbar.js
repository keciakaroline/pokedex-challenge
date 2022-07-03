import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import FavoriteContext from "../contexts/favoritesContext";
import "./styles/Navbar.css";

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <AppBar position="fixed">
      <Toolbar
        style={{ backgroundColor: "#c80000", width: "100%", height: "100%" }}
      >
        <Link to="/" className="Link">
          <Typography
            variant="h6"
            component="div"
            style={{
              paddingLeft: "15px",
            }}
          >
            Pokedex
          </Typography>
        </Link>
        <Link to="/favorites" className="Link">
          <Typography
            variant="h6"
            component="div"
            style={{
              paddingLeft: "15px",
            }}
          >
            Favorites ({favoritePokemons.length})
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
