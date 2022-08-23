import OpportunityCard from "./opportunityCard";

const Content = () => {
  return (
    <div className="grid-in-content flex flex-col gap-6 mr-6 h-max min-h-full p-10 pt-0 w-full md:w-auto md:rounded-tr-2xl">
      <OpportunityCard />
      <OpportunityCard />
      <OpportunityCard />
      <OpportunityCard />
    </div>
  );
};

export default Content;
