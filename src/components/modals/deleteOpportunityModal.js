import React from "react";
import { deleteOpportunityById } from "../../firebase/firebaseHandler";

const DeleteOpportunityModal = ({ opportunity }) => {
  const deleteOpportunity = () => {
    deleteOpportunityById(opportunity.id);
  };

  const validateConfirmationBox = () => {
    const input = document.getElementById(`${opportunity.id}-confirm-delete`);
    const btn = document.getElementById(`${opportunity.id}-confirm-delete-btn`);
    if (input.value === opportunity.title) {
      btn.classList.remove("btn-disabled");
      input.classList.remove("input-warning");
      input.classList.add("input-success");
      return;
    }
    if (
      (input.value !== opportunity.title &&
        !btn.classList.contains("btn-disabled")) ||
      !input.classList.contains("input-warning")
    ) {
      btn.classList.add("btn-disabled");
      input.classList.add("input-warning");
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id={opportunity.id + "-delete-modal"}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-base-100">Are you sure?</h3>
          <p className="py-4 text-base-100">
            Do you really want to delete{" "}
            <span className="text-lg bg-neutral px-1">{opportunity.title}</span>
            ?
          </p>
          <label
            htmlFor={opportunity.id + "-confirm-delete"}
            className="text-base-100"
          >
            Please type the title of the volunteering opportunity below to
            confirm you want to delete it
          </label>
          <input
            type="text"
            id={opportunity.id + "-confirm-delete"}
            placeholder={opportunity.title}
            className="input bg-neutral w-full mt-5 text-base-100"
            onInput={validateConfirmationBox}
          />
          <div className="modal-action">
            <label
              htmlFor={opportunity.id + "-delete-modal"}
              className="btn btn-ghost"
            >
              Cancel
            </label>
            <label
              id={opportunity.id + "-confirm-delete-btn"}
              htmlFor={opportunity.id + "-delete-modal"}
              className="btn btn-primary btn-disabled"
              onClick={deleteOpportunity}
            >
              Yes, delete it!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOpportunityModal;
