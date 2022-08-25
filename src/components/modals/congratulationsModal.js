import React from "react";
import { gotoGcal } from "../../gcal/gcal";
import ParseDate from "../../utils/parseDate";

const CongratulationsModal = ({ opportunity }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={opportunity.id + "-congratulations-modal"}
        className="modal-toggle"
      />
      <div className="modal" id="congratulations-modal">
        <div className="modal-box">
          <h3 className="font-bold text-base-100 text-lg pb-5">
            Congratulations! 🎉
          </h3>

          <p className="text-base-100">You've secured a space on:</p>

          <div className="text-base-100 ml-10 mb-10">
            <em>✨{opportunity.title}✨</em>
            <p>
              Location: <strong>{opportunity.location}</strong>
            </p>
            <p>
              {ParseDate(opportunity.dateFrom)} -{" "}
              {ParseDate(opportunity.dateTo)}
            </p>
          </div>

          <h3 className="text-base-100">Next steps... 🐾</h3>
          <button
            className="btn btn-secondary btn-block text-white mt-5"
            onClick={gotoGcal(opportunity)}
          >
            Add to Google Calendar
          </button>
          <a
            className="btn btn-block btn-primary my-2"
            href="https://luna.and-digital.com/leave"
            target="_blank"
            rel="noreferrer"
          >
            Add it to Luna
          </a>

          <div className="modal-action">
            <label
              htmlFor={opportunity.id + "-congratulations-modal"}
              className="btn btn-ghost"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
