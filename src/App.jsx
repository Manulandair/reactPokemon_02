import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import BuscadorPokemon from "./pages/BuscadorPokemon/BuscadorPokemon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/buscador" element={<BuscadorPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
