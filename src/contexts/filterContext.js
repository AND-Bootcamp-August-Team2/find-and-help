import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterLocations, _setFilterLocations] = useState([]);

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
    <FilterContext.Provider value={[filterLocations, setFilterLocations]}>
      {children}
    </FilterContext.Provider>
  );
};
