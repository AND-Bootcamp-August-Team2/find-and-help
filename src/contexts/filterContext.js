import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterLocations, _setFilterLocations] = useState([]);
  const [filterFromDate, setFilterFromDate] = useState([]);
  const [filterToDate, setFilterToDate] = useState([]);

  const setFilterLocations = (location) => {
    if (!filterLocations.includes(location)) {
      _setFilterLocations((filterLocations) => [...filterLocations, location]);
    } else {
      const newLocations = filterLocations.filter(
        (locations) => locations !== location
      );
      _setFilterLocations([...newLocations]);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        locationFilters: [filterLocations, setFilterLocations],
        fromDateFilters: [filterFromDate, setFilterFromDate],
        toDateFilters: [filterToDate, setFilterToDate],
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
