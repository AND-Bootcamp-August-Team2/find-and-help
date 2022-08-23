import React, { useState, createContext } from 'react';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const locations = ['Glasgow', 'Edinburgh', 'London', 'Manchester', 'Warrington'];
  return (
    <LocationContext.Provider value={useState(locations)}>
      {children}
    </LocationContext.Provider>
  );
};