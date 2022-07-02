import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar className="AppBar">
        <Link to="/" className="Link">
          <Typography variant="h6" component="div" className="Typography">
            Pokedex
          </Typography>
        </Link>
        <Link to="/favorites" className="Link">
          <Typography variant="h6" component="div" className="Typography">
            Favorites
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
