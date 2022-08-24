import React from "react";
import { reserveOpportunity } from "../../firebase/firebaseHandler";
import CongratulationsModal from "./congratulationsModal";

function OpportunityDetailsModal({ opportunity }) {
  function openCongratulationsModal() {
    const success = reserveOpportunity(opportunity.id);
    if (!success) {
      // TODO: open modal showing non-success
    }
    document.getElementById(
      opportunity.id + "-congratulations-modal"
    ).checked = true;
  }

  const ParseDate = (date) => {
    const dateParse = new Date(date).toLocaleDateString("en-gb");
    return dateParse === "Invalid Date" ? date : dateParse;
  };

  return (
    <div>
      <label
        htmlFor={opportunity.id + "-details-modal"}
        className="btn btn-secondary w-40 modal-button text-s md:w-48 md:text-white md:text-lg"
      >
        View Details
      </label>
      <input
        type="checkbox"
        id={opportunity.id + "-details-modal"}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h2 className="font-bold text-base-100 text-lg">
            {opportunity.title}
          </h2>
          <div className="badge text-white bg-primary badge-outline my-4">
            👥 {opportunity.spots} spots available
          </div>

          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-lg text-base-100">{opportunity.location}</h3>
            <span className="flex gap-2 justify-between">
              <div className="self-center text-white badge badge-secondary badge-xl shrink-0 whitespace-nowrap">
                {ParseDate(opportunity.dateFrom)} -{" "}
                {ParseDate(opportunity.dateTo)}
              </div>
            </span>
          </div>

          <p className="text-base-100 py-5">{opportunity.description}</p>

          <div className="card bg-neutral shadow-xl">
            <div className="card-body">
              <h2 className="card-title">✋ Important information!</h2>
              <p className="text-base-100">
                Clicking book will only save you a spot on this volunteering
                opportunity.
              </p>
              <p className="text-base-100">
                You <strong>MUST</strong> still book your volunteering days off
                in Luna
              </p>
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor={opportunity.id + "-details-modal"}
              className="btn btn-ghost"
            >
              Cancel
            </label>
            <label
              className="btn btn-secondary text-white"
              htmlFor={opportunity.id + "-details-modal"}
              onClick={openCongratulationsModal}
            >
              Sign me up!
            </label>
          </div>
        </div>
      </div>
      <CongratulationsModal opportunity={opportunity} />
    </div>
  );
}

export default OpportunityDetailsModal;
