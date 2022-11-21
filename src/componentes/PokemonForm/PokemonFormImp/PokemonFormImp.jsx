import "./PokemonFormImp.css";
import { useNavigate, Navigate } from "react-router-dom";
const PokemonFormImp = ({ name, url }) => {
  const Navigate = useNavigate();
  const CallNavigate = () => {
    const id = url.replace("https://pokeapi.co/api/v2/pokemon-form/", "");
    Navigate(`${id}`);
    return;
  };
  return (
    <>
      <div className="pokeForm">
        <div>
          <button onClick={CallNavigate}>Name : {name}</button>
        </div>
        <div>
          <button onClick={CallNavigate}>Url : {url}</button>
        </div>
      </div>
    </>
  );
};
export default PokemonFormImp;
