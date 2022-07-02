import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";
import PokemonDetails from "./components/PokemonDetails";
import { getPokemons, getPokemonsData } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      // wait the api
      const data = await getPokemons();
      // run getPokemonsData and wait for all results
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      // receive results
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemonError: ", error);
    }
  };

  useEffect(() => {
    //console.log("loaded");
    fetchPokemons();
  }, []);

  return (
    <div>
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
              />
            }
          />
          <Route
            exact
            path="/pokemon/:id"
            element={<PokemonDetails pokemon={pokemon} pokemons={pokemons} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
