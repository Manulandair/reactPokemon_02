import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";

const Oulet = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
export default Oulet;
