import { LocationContext } from "../../contexts/locationContext";
import { useContext, useState } from "react";

const AddOpportunityForm = ({
  setTitle,
  setDescription,
  setFromDate,
  setToDate,
  setLocation,
  setSpots,
}) => {
  const [location] = useContext(LocationContext);
  const [spotValue, setSpotValue] = useState(1);

  return (
    <div>
      <div className="form-control w-full max-w-md bg-gray-100 rounded-md mt-2">
        <label className="label">
          <span className="label-text text-gray-800">Opportunity Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input placeholder-slate-500 input-bordered w-full max-w-md bg-white text-black "
          onChange={(input) => setTitle(input.target.value)}
        />
        <label className="label pt-4">
          <span className="label-text text-gray-800">Description</span>
        </label>
        <textarea
          className="textarea placeholder-slate-500 textarea-bordered h-24 bg-white text-black"
          placeholder="Type here"
          onChange={(input) => setDescription(input.target.value)}
        ></textarea>
        <label className="label pt-4">
          <span className="label-text text-gray-800">Location</span>
        </label>
        <select
          className="select select-bordered w-full max-w-md bg-white text-black"
          onChange={(input) => setLocation(input.target.value)}
        >
          {location.map((location, i) => (
            <option key={location + i}>{location.toString()}</option>
          ))}
        </select>
        <label className="label pt-4">
          <span className="label-text text-gray-800">Availability</span>
        </label>
        <input
          type="text"
          pattern="^[1-9][0-9]*$"
          placeholder="Number of available spots"
          value={spotValue}
          className="input input-bordered w-full max-w-md bg-white text-black"
          onChange={(input) => {
            setSpotValue(
              input.target.validity.valid ? input.target.value : spotValue
            );
            setSpots(
              input.target.validity.valid
                ? Number(input.target.value)
                : Number(spotValue)
            );
          }}
        />
        <ul>
          <li className="pt-4">
            <label htmlFor="fromDate" className="label-text text-gray-800">
              From:
            </label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              className="textarea form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50
                text-black
                bg-white"
              onChange={(input) => setFromDate(input.target.value)}
            />
          </li>
          <li className="">
            <label htmlFor="toDate" className="label-text pt-4 text-gray-800">
              To:
            </label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              className="textarea form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50
                text-black
                bg-white"
              onChange={(input) => setToDate(input.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddOpportunityForm;
