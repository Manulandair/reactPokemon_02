import "./PokemonFormUrl.css";
import { useState } from "react";
import { useEffect } from "react";
import PokemonForm from "../PokemonForm";

const PokemonFormUrl = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-form/ ")
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
      <div className="buscadorPokemon">
        <div className="buscadorPokemon_h1">
          Esta es la pagina principal de Pokemones
        </div>
        {pokemon && <PokemonForm pokemon={pokemon} />};
      </div>
    </>
  );
};
export default PokemonFormUrl;
