import React from "react";
import Filter from "./filter";

const FilterModal = () => {
  return (
    <div>
      <label
        htmlFor="filter-modal"
        className="btn btn-ghost w-32 modal-button text-xs "
      >
        Filter
      </label>
      <input type="checkbox" id="filter-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
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
