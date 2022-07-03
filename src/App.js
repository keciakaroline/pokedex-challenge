import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import { getPokemons, getPokemonsData } from "./api";
import PokemonDetails from "./components/PokemonDetails";
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "FAVORITES_KEY";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const itemsPerPage = 50;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      // wait the api
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      // run getPokemonsData and wait for all results
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      // receive results
      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      // to know how many pages the pagination will have
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("fetchPokemonError: ", error);
    }
  };

  // to get information from favorite pokemon
  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  // update when change/load page
  useEffect(() => {
    //console.log("loaded");
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (pokemonObject) => {
    //pokemon []
    const updatedFavorites = [...favorites];
    //string[]
    const favoritesNames = updatedFavorites.map((favorite) => favorite.name);

    const foundIndex = favoritesNames.indexOf(pokemonObject.name);
    // if pokemon already exists in favorite
    if (foundIndex >= 0) {
      updatedFavorites.splice(foundIndex, 1);
    } else {
      // if pokemon do not exists in favorite, add him
      updatedFavorites.push(pokemonObject);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Pokedex
                  pokemons={pokemons}
                  setPokemons={setPokemons}
                  loading={loading}
                  setLoading={setLoading}
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                />
              }
            />
            <Route
              exact
              path="/favorites"
              element={
                <Favorites
                  pokemons={pokemons}
                  setPokemons={setPokemons}
                  loading={loading}
                  setLoading={setLoading}
                />
              }
            />
            <Route
              exact
              path={`/pokemon/:name`}
              element={
                <PokemonDetails pokemons={pokemons} setPokemons={setPokemons} />
              }
            />
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </div>
  );
}

export default App;
