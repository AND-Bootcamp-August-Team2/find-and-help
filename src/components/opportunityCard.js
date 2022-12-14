import React from "react";
import ParseDate from "../utils/parseDate";
import OpportunityDetailsModal from "./modals/opportunityDetailsModal";

function OpportunityCard({ opportunity }) {
  return (
    <div className="card static md:card-side bg-white shadow-xl md:max-h-[400px]">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" className="" />
      </figure>
      <div className="card-body">
        <span className="flex gap-2 justify-between flex-wrap md:flex-nowrap">
          <h2 className="card-title font-roboto text-3xl text-base-100">
            {opportunity.title}
          </h2>
          <div className="font-roboto self-center text-white badge badge-secondary badge-xl shrink-0 whitespace-nowrap">
            {ParseDate(opportunity.dateFrom)} - {ParseDate(opportunity.dateTo)}
          </div>
        </span>
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-lg text-base-100">{opportunity.location}</h3>
          <div className="badge text-base-100 badge-outline">
            {opportunity.spots} spots available
          </div>
        </div>

        <p className="overflow-hidden text-base text-base-100">
          {opportunity.description}
        </p>
        <div className="card-actions justify-end flex-none">
          <OpportunityDetailsModal opportunity={opportunity} />
        </div>
      </div>
    </div>
  );
}

export default OpportunityCard;
