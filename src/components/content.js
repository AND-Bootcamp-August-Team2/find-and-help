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
      let filteringOpportunities = opportunities;

      if (!filterLocations.length < 1) {
        filteringOpportunities = filteringOpportunities.filter((opportunity) =>
          filterLocations.includes(opportunity.location)
        );
      }

      if (filterFromDate.length > 0) {
        filteringOpportunities = filteringOpportunities.filter(
          (opportunity) => {
            const opportunityFromDate = new Date(opportunity.dateFrom);
            const filterDate = new Date(filterFromDate);
            if (opportunityFromDate && filterDate) {
              return opportunityFromDate >= filterDate;
            } else {
              return null;
            }
          }
        );
      }

      if (filterToDate.length > 0) {
        filteringOpportunities = filteringOpportunities.filter(
          (opportunity) => {
            const opportunityToDate = new Date(opportunity.dateTo);
            const filterDate = new Date(filterToDate);
            if (opportunityToDate && filterDate) {
              return opportunityToDate <= filterDate;
            } else {
              return null;
            }
          }
        );
      }

      return filteringOpportunities;
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

  if (filteredOpportunities.length === 0) {
    return (
      <div className="grid-in-content mr-6 h-max min-h-full p-6 w-full md:w-auto md:rounded-tr-2xl">
        <h2 className="flex flex-col m-12  text font-roboto text-2xl text-slate-600 h-screen pt-20 md:pt-0">
          No Notifications To Display
        </h2>
      </div>
    );
  } else {
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
  }
};

export default Content;
