import React from "react";
import AddOpportunityForm from "./forms/addOpportunityForm";

const OpportunityLg = () => {
  return (
    <div>
      <label
        htmlFor="opportunity-modal-lg"
        className="btn btn-primary w-40 modal-button text-xs md:w-48 md:text-base"
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
          <h3 className="font-bold text-lg">New Volunteering Opportunity</h3>
          <AddOpportunityForm />
          <div className="modal-action">
            <label htmlFor="opportunity-modal-lg" className="btn btn-ghost">
              Cancel
            </label>
            <label htmlFor="opportunity-modal-lg" className="btn btn-primary">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityLg;
