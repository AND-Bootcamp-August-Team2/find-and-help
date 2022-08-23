import React from "react";

const CongratulationsModal = (props) => {
  return (
    <div>
      <label
        htmlFor="congratulations-modal"
        className="btn btn-secondary w-40 modal-button text-xs md:w-48 md:text-base"
      >
        Yes, sign me up for this!
      </label>
      <input
        type="checkbox"
        id="congratulations-modal"
        className="modal-toggle"
      />
      <div className="modal" id="congratulations-modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg pb-10">
            Congratulations, you've got a space on VO!!
          </h3>

          <a role="button" className="btn btn-block my-2">
            Add to your Google Calendar!
          </a>
          <a className="btn btn-block btn-primary my-2">Add it to Luna</a>

          <div className="modal-action">
            <label htmlFor="congratulations-modal" className="btn btn-ghost">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
