import React, { useContext, useState, useEffect, useCallback } from "react";
import OpportunityCard from "./opportunityCard";
import { readOpportunities } from "../firebase/firebaseHandler";
import { FilterContext } from "../contexts/filterContext";

const Content = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const { locationFilters, fromDateFilters, toDateFilters } =
    useContext(FilterContext);
  const [filterLocations] = locationFilters;
  const [filterFromDate] = fromDateFilters;
  const [filterToDate] = toDateFilters;

  useEffect(() => {
    const loadData = async () => {
      const opportunitiesData = await readOpportunities();
      setOpportunities(opportunitiesData);
      setFilteredOpportunities(opportunitiesData);
    };
    loadData();
  }, []);

  const getFilteredOpportunities = useCallback(
    (opportunities) => {
      let myOpportunities = opportunities;

      if (!filterLocations.length < 1) {
        myOpportunities = myOpportunities.filter((opportunity) =>
          filterLocations.includes(opportunity.location)
        );
      }

      if (filterFromDate.length > 0) {
        myOpportunities = myOpportunities.filter(
          (opportunity) => opportunity.dateFrom >= filterFromDate
        );
      }

      if (filterToDate.length > 0) {
        myOpportunities = myOpportunities.filter(
          (opportunity) => opportunity.dateTo >= filterToDate
        );
      }

      return myOpportunities;
    },
    [filterFromDate, filterLocations, filterToDate]
  );

  useEffect(() => {
    setFilteredOpportunities(getFilteredOpportunities(opportunities));
  }, [
    filterLocations,
    getFilteredOpportunities,
    opportunities,
    filterFromDate,
    filterToDate,
  ]);

  return (
    <div className="grid-in-content mr-6 h-max min-h-full p-6 w-full md:w-auto md:rounded-tr-2xl">
      <ul className="flex flex-col gap-6">
        {filteredOpportunities.map((opportunity, i) => (
          <li key={opportunity + i}>
            <OpportunityCard opportunity={opportunity} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
