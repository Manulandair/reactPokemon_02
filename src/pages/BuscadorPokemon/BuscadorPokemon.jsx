import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./buscadorPokemon.css";

function BuscadorPokemon() {
  const navigate = useNavigate();

  return (
    <>
      <div className="buscadorPokemon">
        <div className="buscadorPokemon_h1">
          Esta es la pagina principal de Pokemones
        </div>
        <div className="buscadorPokemonButton">
          <button type="submit" onClick={() => navigate("imagenes")}>
            Mostrar pokemones con imagenes
          </button>
        </div>
        <div className="buscadorPokemonButton">
          <button onClick={() => navigate("url")}>
            Mostrar pokemones con Nombre/Url
          </button>
        </div>
      </div>
    </>
  );
}

export default BuscadorPokemon;
