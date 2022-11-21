import { useState } from "react";
import { useEffect } from "react";

const PokemonElemtImagenes = ({}) => {
  const [pokemon, setPokemon] = useState([]);
  let ArrayPokemon = [];
  let id = 1;

  const use = (id) => {
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
        .then((resp) => resp.json())
        .then((data) => {
          setPokemon(data);
          console.log(data);
        })
        .catch((e) => {
          console.error("La peticion ha fallado");
        });
    }, []);
  };
  if (!pokemon) return <span>Cargando...</span>;
  console.log(pokemon.id);
  peticionImagen((id) => {
    id < 10 && id++;
    use(id);
  });

  return (
    <>
      <div>Nomre:{pokemon.name}</div>
    </>
  );
};

export default PokemonElemtImagenes;
