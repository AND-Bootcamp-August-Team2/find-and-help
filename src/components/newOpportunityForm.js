const NewOpportunityForm = () => {
  return (
    <div>
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text text-white">Opportunity Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-md bg-neutral "
        />
        <label className="label pt-4">
          <span className="label-text text-white">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24 bg-neutral text-black"
          placeholder="Type here"
        ></textarea>
        <ul>
          <li className="pt-4">
            <label htmlFor="fromDate" className="label-text text-white">
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
            />
          </li>
          <li className="">
            <label htmlFor="toDate" className="label-text pt-4 text-white">
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
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewOpportunityForm;
