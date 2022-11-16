import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import BuscadorPokemon from "./pages/BuscadorPokemon/BuscadorPokemon";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscadorPokemon />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
