import React from 'react';

const ParseDate = (date) => {
  const dateParse = new Date(date).toLocaleDateString('en-gb');
  return dateParse === 'Invalid Date' ? date : dateParse;
};

const OpportunityCard = ({ opportunity }) => {
  return (
    <div className="card static md:card-side bg-white shadow-xl md:max-h-[400px]">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" className="" />
      </figure>
      <div className='card-body'>
        <span className='flex gap-2 justify-between items-baseline flex-wrap'>
          <h2 className='card-title flex-none text-3xl'>{opportunity.title}</h2>
          <div className='badge badge-accent badge-lg shrink-0 whitespace-nowrap'>
            {ParseDate(opportunity.dateFrom)} - {ParseDate(opportunity.dateTo)}
          </div>
        </span>
        <div className='flex flex-wrap items-baseline gap-2'>
          <h3 className='text-lg text-gray-600'>{opportunity.location}</h3>
          <div className='badge text-gray-600 badge-outline'>
            {opportunity.spots} spots available
          </div>
        </div>

        <p className='overflow-hidden text-base'>{opportunity.description}</p>
        <div className='card-actions justify-end flex-none'>
          <button className='btn btn-primary'>Details</button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
