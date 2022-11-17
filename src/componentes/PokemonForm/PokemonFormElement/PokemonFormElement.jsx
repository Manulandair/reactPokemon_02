import { useEffect, useState } from "react";

const PokemonFormElement = ({ url }) => {
  const [pokeforelem, setPokeforelme] = useState({});
  console.log("hasta aqui tambien");
  //   useEffect(() => {
  //     fetch({ url })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         setPokeforelme(data);
  //         console.log(data).catch((e) => {
  //           console.error("La peticion ha fallado");
  //         });
  //       });
  //   });
  return <div>{url}</div>;
};
export default PokemonFormElement;
