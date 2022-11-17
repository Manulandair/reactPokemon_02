import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const Navigate = useNavigate();
  const CallNavigate = () => {
    Navigate("/buscador");
  };
  return (
    <>
      <h1>Esta es la pagina inicial de la busqueda de Pokemons</h1>
      <div className="menuSecond">
        <button type="submit" onClick={CallNavigate}>
          Buscar with callNavigate
        </button>
        <Link to="/buscador">Buscar con Link y Route</Link>
        <a href="/buscador">
          <button className="menuthird">
            Buscar con etiqueta a /href y Route{" "}
          </button>
        </a>
      </div>
    </>
  );
};

export default Menu;
