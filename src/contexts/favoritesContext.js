import React from "react";

const FavoriteContext = React.createContext({
  favoritePokemons: [],
  updateFavoritePokemons: () => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
