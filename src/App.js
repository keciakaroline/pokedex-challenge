import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Pokedex />} />
          <Route exact path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
