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
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text">Opportunity Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-md bg-neutral text-black "
          onChange={(input) => setTitle(input.target.value)}
        />
        <label className="label pt-4">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Type here"
          onChange={(input) => setDescription(input.target.value)}
        ></textarea>
        <label className="label pt-4">
          <span className="label-text">Locations</span>
        </label>
        <select
          className="select select-bordered w-full max-w-md"
          onChange={(input) => setLocation(input.target.value)}
        >
          {location.map((location, i) => (
            <option key={location + i}>{location.toString()}</option>
          ))}
        </select>
        <label className="label pt-4">
          <span className="label-text">Availability</span>
        </label>
        <input
          type="text"
          pattern="^[1-9][0-9]*$"
          placeholder="Number of available spots"
          value={spotValue}
          className="input input-bordered w-full max-w-md"
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
            <label htmlFor="fromDate" className="label-text">
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
                bg-neutral
                text-slate-400"
              onChange={(input) => setFromDate(input.target.value)}
            />
          </li>
          <li className="">
            <label htmlFor="toDate" className="label-text pt-4">
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
                bg-neutral
                text-slate-400"
              onChange={(input) => setToDate(input.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddOpportunityForm;
