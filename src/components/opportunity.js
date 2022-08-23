import React from "react";
import NewOpportunityForm from "./newOpportunityForm";

const Opportunity = () => {
  return (
    <div>
      <label
        htmlFor="opportunity-modal"
        className="btn btn-secondary modal-button text-xs w-25 text-white md:w-48 md:text-base"
      >
        Add Opportunity
      </label>
      <input type="checkbox" id="opportunity-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">
            Add Volunteering Opportunity
          </h3>
          <NewOpportunityForm />
          <div className="modal-action">
            <label htmlFor="opportunity-modal" className="btn btn-ghost">
              Cancel
            </label>
            <label htmlFor="opportunity-modal" className="btn btn-primary">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
