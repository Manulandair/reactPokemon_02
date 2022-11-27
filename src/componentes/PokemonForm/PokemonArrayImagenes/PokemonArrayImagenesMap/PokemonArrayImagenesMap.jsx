import "./PokemonArrayImagenesMap.css";

const PokemonArrayImagenesMap = ({ id, name, sprites }) => {
  console.log(id);
  console.log(name);
  console.log(sprites);
  const arraypok = [];
  arraypok.push(id);
  return (
    <div className="contbox">
      <div>Nombre :{name}</div>
      <div>Id : {id}</div>
      <img src={sprites.back_default} alt="" />
    </div>
  );
};
export default PokemonArrayImagenesMap;
