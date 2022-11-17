import "./PokemonFormImp.css";
import { useNavigate, Navigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

const PokemonFormImp = ({ name, url }) => {
  const urlElement = String(url);
  const Navigate = useNavigate();
  const CallNavigate = () => {
    Navigate();
    console.log(urlElement);
  };
  return (
    <>
      <ul className="pokeForm">
        <li>
          <NavLink to="/">Nombre :{name}</NavLink>
        </li>
        <li>
          <button onClick={CallNavigate}>Url : {url}</button>
        </li>
        <a href="" onClick={() => Navigate(`${urlElement}`)}>
          Ver Pokem
        </a>
      </ul>
    </>
  );
};
export default PokemonFormImp;
