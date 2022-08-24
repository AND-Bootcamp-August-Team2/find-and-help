import React from "react";
import FilterModal from "./filtermodal";
import Opportunity from "./opportunity";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-opacity-95  md:hidden navbar h-20 bg-primary ">
      <div className="flex-1">
        <h1 className="flex flex-col font-roboto font-bold text-md text-white">
          Find
          <svg className="h-5 fill-white" viewBox="0 0 315.81 126.72">
            <path d="M0 0h323.25v122.74H0z" />
            <path
              className="fill-primary"
              d="M200.51 100.25h-18.83L141.57 53.2v47.05h-18.82V22.49h18.82l40.11 47v-47h18.83zM261.88 22.49h-38.89v18.83h9.92v40.11h-9.92v18.83h38.89c21.44 0 38.88-17.44 38.88-38.88 0-21.45-17.44-38.89-38.88-38.89zm0 58.93h-10.14V41.31h10.14c11.06 0 20.05 9 20.05 20.05.01 11.07-8.99 20.06-20.05 20.06zM61.38 22.49c-21.44 0-38.88 17.44-38.88 38.88v38.89h18.83v-9.92h40.11v9.92h18.83V61.37c-.01-21.44-17.45-38.88-38.89-38.88zM81.43 71.5H41.32V61.36c0-11.06 9-20.05 20.05-20.05 11.06 0 20.05 8.99 20.05 20.05l.01 10.14z"
            />
          </svg>
          Help
        </h1>
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
