import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import PokemonFormUrl from "./componentes/PokemonForm/PokemonFormUrl/PokemonFormUrl";
import BuscadorPokemon from "./pages/BuscadorPokemon/BuscadorPokemon";
import PokemonFormElement from "./componentes/PokemonForm/PokemonFormElement/PokemonFormElement";
import Menu from "./Menu/Menu";
import PokemonElemtImagenes from "./componentes/PokemonForm/PokemonElemtImagenes/PokemonElemtImagenes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/buscador" element={<BuscadorPokemon />} />
        <Route path="/buscador/url/" element={<PokemonFormUrl />} />
        <Route path="/buscador/imagenes/" element={<PokemonElemtImagenes />} />
        <Route path="/buscador/url/:id" element={<PokemonFormElement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
