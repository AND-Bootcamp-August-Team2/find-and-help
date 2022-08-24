import React, { useContext } from "react";
import Location from "./location";
import { LocationContext } from "../contexts/locationContext";

const Filter = () => {
  const [location] = useContext(LocationContext);
  return (
    <div className="bg-white">
      <h2 className="font-roboto uppercase font-bold text-xl pl-4">Filters</h2>
      <details open className="pt-4">
        <summary className="font-bold text-lg text-base-100">Locations</summary>
        <div className="form-control rounded-lg p-2 m-1 ">
          <ul>
            {location.map((location, i) => (
              <li key={location + i}>
                <Location name={location.toString()} />
              </li>
            ))}
          </ul>
        </div>
      </details>
      <details open className="pt-4">
        <summary className="font-bold text-lg text-base-100">Date</summary>
        <div className="form-control rounded-lg p-2 m-1 ">
          <ul>
            <li>
              <label
                htmlFor="fromDate"
                className="label-text text-lg text-base-100"
              >
                From:
              </label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                className="form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                text-base-100"
              />
            </li>
            <li className="pt-2">
              <label
                htmlFor="toDate"
                className="label-text text-lg text-base-100"
              >
                To:
              </label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                className="form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                text-base-100"
              />
            </li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default Filter;
