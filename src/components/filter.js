import React, { useContext } from 'react';
import Location from './location';
import { LocationContext } from '../contexts/locationContext';

const Filter = () => {
  const [location] = useContext(LocationContext);
  return (
    <div>
      <h2 className='font-bold text-2xl'>Filters</h2>
      <details open className='pt-4'>
        <summary className='font-bold text-lg'>Locations</summary>
        <div className='form-control rounded-lg p-2 m-1 bg-slate-100'>
          <ul>
            {location.map((location, i) => (
              <li key={location + i}>
                <Location name={location.toString()} />
              </li>
            ))}
          </ul>
        </div>
      </details>
      <details open className='pt-4'>
        <summary className='font-bold text-lg'>Date</summary>
        <div className='form-control rounded-lg p-2 m-1 bg-slate-100'>
          <ul>
            <li>
              <label htmlFor='fromDate' className='label-text text-lg'>
                From:
              </label>
              <input
                type='date'
                id='fromDate'
                name='fromDate'
                className='form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </li>
            <li className='pt-2'>
              <label htmlFor='toDate' className='label-text text-lg'>
                To:
              </label>
              <input
                type='date'
                id='toDate'
                name='toDate'
                className='form-input mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default Filter;
