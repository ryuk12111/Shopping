import Directory from "../../directory/directory.component";
import {Outlet} from 'react-router-dom';
import Products from "../Products/Products";

const Inventory = () => {
  return (
    <div>
      <Directory />
      <Products/>
      <Outlet />
    </div>
  );
};

export default Inventory;
