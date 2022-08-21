import React from 'react';

const Opportunity = () => {
  return (
    <div>
      <label
        htmlFor='opportunity-modal'
        className='btn btn-primary w-40 modal-button text-xs md:w-48 md:text-base'
      >
        New Opportunity
      </label>
      <input type='checkbox' id='opportunity-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Space to add new Volunteering Opportunities
          </h3>
          <p className='py-4'>Blah blah blah</p>
          <div className='modal-action'>
            <label htmlFor='opportunity-modal' className='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
