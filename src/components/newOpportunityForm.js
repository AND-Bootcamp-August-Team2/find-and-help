import { LocationContext } from '../contexts/locationContext';
import { useContext } from 'react';

const NewOpportunityForm = ({setTitle, setDescription, setFromDate, setToDate, setLocation, setSpots}) => {
  const [location] = useContext(LocationContext);
  const spots = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <div className='form-control w-full max-w-md'>
        <label className='label'>
          <span className='label-text'>Opportunity Title</span>
        </label>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-md'
          onChange={input => setTitle(input.target.value)}
        />
        <label className='label pt-4'>
          <span className='label-text'>Description</span>
        </label>
        <textarea
          className='textarea textarea-bordered h-24'
          placeholder='Type here'
          onChange={input => setDescription(input.target.value)}
        ></textarea>
        <label className='label pt-4'>
          <span className='label-text'>Locations</span>
        </label>
        <select className="select select-bordered w-full max-w-md" onChange={input => setLocation(input.target.value)}>
            {location.map((location, i) => (
              <option key={location+i}>{location.toString()}</option>
            ))}
        </select>
        <label className='label pt-4'>
          <span className='label-text'>Availability</span>
        </label>
        <select className="select select-bordered w-full max-w-md" onChange={input => setSpots(Number(input.target.value))}>
            {spots.map((spots, i) => (
              <option key={spots+i}>{spots.toString()}</option>
            ))}
        </select>
        <ul>
          <li className='pt-4'>
            <label htmlFor='fromDate' className='label-text'>
              From:
            </label>
            <input
              type='date'
              id='fromDate'
              name='fromDate'
              className='textarea form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50'
              onChange={input => setFromDate(input.target.value)}
            />
          </li>
          <li className=''>
            <label htmlFor='toDate' className='label-text pt-4'>
              To:
            </label>
            <input
              type='date'
              id='toDate'
              name='toDate'
              className='textarea form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50'
              onChange={input => setToDate(input.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewOpportunityForm;
