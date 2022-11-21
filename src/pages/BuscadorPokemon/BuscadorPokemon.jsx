import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./buscadorPokemon.css";

function BuscadorPokemon() {
  // const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon-form/ ")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setPokemon(data.results);
  //     })
  //     .catch(() => {
  //       console.error("La peticion fallo");
  //     });
  // }, []);

  // if (pokemon.length === 0) return <span>Cargando ...</span>;

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
