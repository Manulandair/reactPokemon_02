import { useEffect, useState } from "react";
// import "./PokemonArrayImagenes.css";
import PokemonArrayImagenesMap from "./PokemonArrayImagenesMap/PokemonArrayImagenesMap";
import "./PokemonArrayImagenes.css";

const PokemonArrayImagenes = () => {
  const [pokemon, setPokemon] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-form/")
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch(() => {
        console.error("La peticion ha fallado");
      });
  }, []);

  useEffect(() => {
    const pokemonPromises = pokemon.map(({ url }) => {
      const newPromise = fetch(`${url}`).then((res) => {
        return res.json().catch(() => {
          console.log("La peticion ha fallado");
        });
      });

      return newPromise;
    });

    Promise.all(pokemonPromises).then((data) => {
      setDate(data);
    });
  }, [pokemon]);
  console.log(date);
  return (
    <>
      <div className="contain">
        <div>Esta es la pagina de todos los Pokemones (imagenes)</div>
        <div className="container">
          {date.map(({ id, name, sprites }) => (
            <div key={id}>
              {
                <PokemonArrayImagenesMap
                  id={id}
                  name={name}
                  sprites={sprites}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonArrayImagenes;

// return <>{date && <PokemonArrayImagenesMap date={date} />}</>;
