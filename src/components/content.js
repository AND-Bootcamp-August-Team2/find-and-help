import React, { useContext, useState, useEffect } from "react";
import OpportunityCard from "./opportunityCard";
import { readOpportunities } from "../firebase/firebaseHandler";
import { FilterContext } from "../contexts/filterContext";

const Content = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filterLocations, _] = useContext(FilterContext);

  useEffect(() => {
    const loadData = async () => {
      const opportunitiesData = await readOpportunities();
      setOpportunities(opportunitiesData);
      setFilteredOpportunities(opportunitiesData);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (filterLocations.length !== 0) {
      setFilteredOpportunities(
        opportunities.filter((opportunity) =>
          filterLocations.includes(opportunity.location)
        )
      );
    } else {
      setFilteredOpportunities(opportunities);
    }
  }, [filterLocations, opportunities]);

  return (
    <div className="grid-in-content mr-6 h-max min-h-full p-6 w-full md:w-auto md:rounded-tr-2xl">
      <ul className="flex flex-col gap-6">
        {filteredOpportunities.map((opportunity, i) => (
          <li id={opportunity.id} key={opportunity + i}>
            <OpportunityCard opportunity={opportunity} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
