import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonElemtProp from "../PokemonElemtProp/PokemonElemtProp";
import PokemonElemtImagenes from "../PokemonElemtImagenes/PokemonElemtImagenes";
const PokemonFormElement = ({}) => {
  const { id } = useParams();
  console.log(id);
  const [pokemon, setPokemon] = useState({});
  const [pokemonSprites, setPokemonsprites] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
        setPokemonsprites(data.sprites);
        console.log(data);
      })
      .catch((e) => {
        console.error("La peticion ha fallado");
      });
  }, []);

  return (
    <>
      {pokemon && pokemonSprites && !isNaN(id) && (
        <PokemonElemtProp
          id={pokemon.id}
          name={pokemon.name}
          back_default={pokemonSprites.back_default}
          back_shiny={pokemonSprites.back_shiny}
          front_default={pokemonSprites.front_default}
          front_shiny={pokemonSprites.front_shiny}
        />
      )}
      {pokemon && pokemonSprites && isNaN(id) && (
        <PokemonElemtImagenes
          id={pokemon.id}
          name={pokemon.name}
          back_default={pokemonSprites.back_default}
          back_shiny={pokemonSprites.back_shiny}
          front_default={pokemonSprites.front_default}
          front_shiny={pokemonSprites.front_shiny}
        />
      )}
    </>
  );
};
export default PokemonFormElement;
