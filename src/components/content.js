import React, { useState, useEffect } from "react";
import OpportunityCard from "./opportunityCard";
import { readOpportunities } from "../firebase/firebaseHandler";

const Content = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const opportunitiesData = await readOpportunities();
      setOpportunities(opportunitiesData);
    };
    loadData();
  }, []);

  return (
    <div className="grid-in-content mr-6 h-max min-h-full p-6 w-full md:w-auto md:rounded-tr-2xl">
      <ul className="flex flex-col gap-6">
        {opportunities.map((opportunity, i) => (
          <li key={opportunity + i}>
            <OpportunityCard opportunity={opportunity} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
