import React, {useState} from "react";
import NewOpportunityForm from "./newOpportunityForm";
import { writeOpportunities } from '../firebase/firebaseHandler';

const OpportunityLg = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [location, setLocation] = useState("")
  const [spots, setSpots] = useState(1)

  return (
    <div>
      <label
        htmlFor="opportunity-modal-lg"
        className="btn flex gap-2 items-center btn-white text-black w-40 modal-button text-s md:w-48 shadow-lg hover:bg-slate-800 hover:text-white hover:border-slate-800"
      >
        Add Opportunity
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 fill-primary"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
          />
        </svg>
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
          <NewOpportunityForm setTitle={setTitle} setDescription={setDescription} setFromDate={setFromDate} setToDate={setToDate} setSpots={setSpots} setLocation={setLocation}/>
          <div className="modal-action">
            <label htmlFor="opportunity-modal-lg" className="btn btn-ghost">
              Cancel
            </label>
            <label htmlFor="opportunity-modal-lg" className="btn btn-secondary" onClick={()=>{writeOpportunities(fromDate, toDate, description, location, title, spots)}}>
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityLg;
