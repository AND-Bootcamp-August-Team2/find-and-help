import React from "react";
import { reserveOpportunity } from "../../firebase/firebaseHandler";
import ParseDate from "../../utils/parseDate";
import ToggleModal from "../../utils/toggleModal";
import CongratulationsModal from "./congratulationsModal";
import DeleteOpportunityModal from "./deleteOpportunityModal";

function OpportunityDetailsModal({ opportunity }) {
  function openCongratulationsModal() {
    if (opportunity.spots === 0) {
      alert("Sorry, but there are no spots left to reserve!");
      return;
    }

    reserveOpportunity(opportunity.id).then((successful) => {
      if (!successful) {
        alert("Sorry, looks like someone got the last spot before you! 😭");
        return;
      }
      ToggleModal(opportunity.id + "-congratulations-modal", true);
    });
  }
  return (
    <div>
      <label
        htmlFor={opportunity.id + "-details-modal"}
        className="btn btn-primary text-white"
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
          <span className="flex gap-2 justify-between items-center flex-wrap md:flex-nowrap">
            <h2 className="font-bold text-base-100 text-lg md:text-2xl">
              {opportunity.title}
            </h2>
            <div className="btn-group">
              <label
                className="btn btn-primary text-white"
                htmlFor={opportunity.id + "-details-modal"}
                onClick={() => {
                  ToggleModal(`${opportunity.id}-delete-modal`, true);
                }}
              >
                Delete
              </label>
            </div>
          </span>
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-lg text-base-100">{opportunity.location}</h3>
            <div className="badge text-white bg-primary badge-outline my-4">
              👥 {opportunity.spots} spots available
            </div>
          </div>
          <span className="flex gap-2 justify-between">
            <div className="self-center text-white badge badge-secondary badge-xl shrink-0 whitespace-nowrap">
              {ParseDate(opportunity.dateFrom)} -{" "}
              {ParseDate(opportunity.dateTo)}
            </div>
          </span>

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
      <DeleteOpportunityModal opportunity={opportunity} />
    </div>
  );
}

export default OpportunityDetailsModal;
