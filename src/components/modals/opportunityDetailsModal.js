import React from "react";
import CongratulationsModal from "./congratulationsModal";

const OpportunityDetailsModal = (props) => {
  function openCongratulationsModal() {
    // decrement number of VO's by one
    document.getElementById("congratulations-modal").checked = true;
  }
  return (
    <div>
      <label
        htmlFor="opportunity-details-modal"
        className="btn btn-secondary w-40 modal-button text-xs md:w-48 md:text-base"
      >
        View Details
      </label>
      <input
        type="checkbox"
        id="opportunity-details-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {props.title}Title of opportunity
            <div class="badge badge-lg pl-1">987,654 spaces left</div>
          </h3>

          <p>Description of opportunity</p>
          <div className="modal-action">
            <label
              htmlFor="opportunity-details-modal"
              className="btn btn-ghost"
            >
              Cancel
            </label>
            <label
              class="btn btn-secondary"
              htmlFor="opportunity-details-modal"
              onClick={openCongratulationsModal}
            >
              Sign up for VO
            </label>
          </div>
        </div>
      </div>
      <CongratulationsModal />
    </div>
  );
};

export default OpportunityDetailsModal;
