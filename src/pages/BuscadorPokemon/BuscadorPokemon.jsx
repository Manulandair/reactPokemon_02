import { useEffect, useState } from "react";
import PokemonForm from "../../componentes/PokemonForm/PokemonForm";
import "./buscadorPokemon.css";

function BuscadorPokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-form/")
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch(() => {
        console.error("La peticion fallo");
      });
  }, []);

  if (pokemon.length === 0) return <span>Cargando ...</span>;

  return (
    <>
      <div className="buscadorPokemon_h1">
        Esta es la pagina principal de Pokemones
      </div>
      {pokemon && <PokemonForm pokemon={pokemon} />};
    </>
  );
}

export default BuscadorPokemon;
