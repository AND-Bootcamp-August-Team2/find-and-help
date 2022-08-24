import React from "react";
import Filter from "./filter";

const FilterModal = () => {
  return (
    <div>
      <label
        htmlFor="filter-modal"
        className="font-roboto tracking-wider normal-case btn btn-sm flex gap-2 items-center btn-secondary  text-white w-25 modal-button text-s shadow-sm hover:bg-slate-800 hover:text-white hover:border-slate-800"
      >
        Filter
      </label>
      <input type="checkbox" id="filter-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white">
          <Filter />
          <div className="modal-action">
            <label htmlFor="filter-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
