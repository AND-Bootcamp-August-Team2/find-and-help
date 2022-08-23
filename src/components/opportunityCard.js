import OpportunityDetailsModal from "./modals/opportunityDetailsModal";

const OpportunityCard = () => {
  return (
    <div className="card static md:card-side bg-base-100 shadow-xl md:max-h-[400px]">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex-none">New Volunteering Opportunity</h2>
        <p className="overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
          ornare mi. Suspendisse ultrices fermentum risus sed pharetra. Nunc
          facilisis pellentesque ipsum, vitae faucibus metus mattis non. Quisque
          ligula sem, aliquam vitae ex ut, suscipit hendrerit turpis. Quisque
          tristique ex vel consequat semper. Vestibulum et justo sem. Quisque
          consequat posuere justo sed dictum. Pellentesque a vulputate enim.
          Fusce venenatis convallis leo, id blandit lorem pellentesque vitae.
        </p>
        <div className="card-actions justify-end flex-none">
          <button className="btn btn-accent">Set Reminder</button>
          <OpportunityDetailsModal />
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
