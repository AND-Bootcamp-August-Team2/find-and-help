import React from "react";
import FilterModal from "./filtermodal";
import Opportunity from "./opportunity";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-opacity-95  md:hidden navbar bg-primary">
      <div className="flex-1">
        <label className="normal-case text-md pl-2 font-bold">
          Find AND Help
        </label>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <FilterModal />
          </li>
          <li>
            <Opportunity />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
