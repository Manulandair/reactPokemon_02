import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const Navigate = useNavigate();
  const CallNavigate = () => {
    Navigate("/buscador");
  };
  return (
    <>
      <div className="container">
        <h1>Esta es la pagina inicial de la busqueda de Pokemons</h1>
        <div className="menuSecond">
          <button type="submit" onClick={CallNavigate}>
            Buscar with callNavigate
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
