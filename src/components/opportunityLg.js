import React, {useState} from 'react';
import NewOpportunityForm from './newOpportunityForm';
import { writeOpportunities } from '../firebase/firebaseHandler';

const OpportunityLg = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [location, setLocation] = useState("Warrington")
  const [spots, setSpots] = useState(0)

  return (
    <div>
      <label
        htmlFor='opportunity-modal-lg'
        className='btn btn-primary w-40 modal-button text-xs md:w-48 md:text-base'
      >
        New Opportunity
      </label>
      <input
        type='checkbox'
        id='opportunity-modal-lg'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>New Volunteering Opportunity</h3>
          <NewOpportunityForm setTitle={setTitle} setDescription={setDescription} setFromDate={setFromDate} setToDate={setToDate} setSpots={setSpots} setLocation={setLocation}/>
          <div className='modal-action'>
            <label htmlFor='opportunity-modal-lg' className='btn btn-ghost'>
              Cancel
            </label>
            <label htmlFor='opportunity-modal-lg' className='btn btn-primary' onClick={()=>{writeOpportunities(fromDate, toDate, description, location, title, spots)}}>
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityLg;
