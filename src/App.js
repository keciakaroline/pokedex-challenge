import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import { getPokemons, getPokemonsData } from "./api";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

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

  // update when change/load page
  useEffect(() => {
    //console.log("loaded");
    fetchPokemons();
  }, [page]);

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
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            }
          />
          <Route exact path="/favorite" element={<Favorites />} />
          <Route
            exact
            path={`/pokemon/:name`}
            element={
              <PokemonDetails pokemons={pokemons} setPokemons={setPokemons} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
