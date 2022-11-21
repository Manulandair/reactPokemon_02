import "./pokemonForm.css";
import PokemonFormImp from "./PokemonFormImp/PokemonFormImp";
const PokemonForm = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <>
      <div className="pokeform_h1">Pagina de los nombres de pokemon</div>
      {pokemon.map(({ name, url }) => (
        <div key={name}>{<PokemonFormImp name={name} url={url} />}</div>
      ))}
    </>
  );
};
export default PokemonForm;
