import React, { useRef, useState } from "react";
import "./PokemonElemtProp.css";

const PokemonElemtProp = ({
  id,
  name,
  back_default,
  back_shiny,
  front_default,
  front_shiny,
}) => {
  //   const imageRef = useRef(null);
  const [imagepaint, setImagepaint] = useState({});

  const BotonPokemon = (e) => {
    setImagepaint(e);
    // imageRef.current.src(image);
    console.log(imagepaint);
  };
  return (
    <>
      <div className="container">
        <div className="title">
          Este es el Pokemos que has seleccionado <span>{name}</span>
        </div>
        <div className="idName">
          <div className="idNamSecond idNam">
            <div>
              Id : <span>{id}</span>
            </div>
          </div>
          <div className="idNamSecond name">
            <div>
              Nombre : <span>{name}</span>
            </div>
          </div>
          <div className="Imagen">
            <button
              onClick={() => {
                BotonPokemon(back_default);
              }}
            >
              back_default
            </button>
            <button
              onClick={() => {
                BotonPokemon(back_shiny);
              }}
            >
              back_shiny
            </button>
            <button
              onClick={() => {
                BotonPokemon(front_default);
              }}
            >
              front_default
            </button>
            <button
              onClick={() => {
                BotonPokemon(front_shiny);
              }}
            >
              front_shiny
            </button>
          </div>
        </div>

        <div className="imagePokemon">
          <img src={imagepaint} alt="" />
        </div>
      </div>
    </>
  );
};
export default PokemonElemtProp;
