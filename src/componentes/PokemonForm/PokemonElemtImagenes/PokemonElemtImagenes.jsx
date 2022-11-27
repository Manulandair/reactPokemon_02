import { useState } from "react";
import { useEffect } from "react";

const PokemonElemtImagenes = ({}) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonSprites, setPokemonsprites] = useState({});
  const [contador, setContador] = useState([1]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${contador}/`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
        setPokemonsprites(data.sprites);
        console.log(data.sprites);
      })
      .catch((e) => {
        console.error("La peticion ha fallado");
      });
  }, []);
  if (!pokemon && !pokemonSprites) return <span>Cargando...</span>;
  console.log(pokemon.name);
  console.log(contador);
  console.log(pokemonSprites.back_default);

  return (
    <>
      <div>
        <button
          type="submit"
          onClick={() => {
            setContador(parseFloat(contador) + parseFloat(1));
            useEffect(contador);
          }}
        >
          Pulsar para ver Pokemon
        </button>
      </div>
      <div>Nomre:{pokemon.name}</div>

      <img src={pokemonSprites.back_default} alt="" />
    </>
  );
};
export default PokemonElemtImagenes;
