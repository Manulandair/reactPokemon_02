import "./pokemonForm.css";
import PokemonFormElement from "./PokemonFormElement/PokemonFormElement";
const PokemonForm = ({ pokemon }) => {
  console.log("hola");
  console.log(pokemon);
  const GoPokemonElemen = (url) => {
    console.log(`hola hasta aqui ${url}`);
    // if (url === true) return <PokemonFormElement url={url} />;
    return (
      <>
        <h1>Hola que hay</h1>
      </>
    );
  };
  return (
    <>
      <div className="pokeform_h1">Pagina de los nombres de pokemon</div>
      {pokemon.map(({ name, url }) => (
        <div key={name}>
          <ul className="pokeForm">
            <button onClick={() => GoPokemonElemen(url)} type="button">
              <li>Nombre : {name}</li>
            </button>
            <li>Url : {url}</li>
          </ul>
        </div>
      ))}
    </>
  );
};
export default PokemonForm;
