import React from "react";
import AddOpportunityForm from "./forms/addOpportunityForm";

const OpportunityLg = () => {
  return (
    <div>
      <label
        htmlFor="opportunity-modal-lg"
        className="btn btn-secondary w-40 modal-button text-s md:w-48 md:text-white shadow-lg"
      >
        Add Opportunity
      </label>
      <input
        type="checkbox"
        id="opportunity-modal-lg"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">
            Add Volunteering Opportunity
          </h3>
          <NewOpportunityForm />
          <div className="modal-action">
            <label htmlFor="opportunity-modal-lg" className="btn btn-ghost">
              Cancel
            </label>
            <label htmlFor="opportunity-modal-lg" className="btn btn-secondary">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityLg;
