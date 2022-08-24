import React, { useState, createContext, useEffect } from "react";
import { readLocations } from "../firebase/firebaseHandler";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  
  const [locations, setLocations] = useState([])

  useEffect(()=>{
    const loadLocationData = async () => {
      const locationData = await readLocations();
      setLocations(locationData)
    };
    loadLocationData();
  },[])

  return (
    <LocationContext.Provider value={[locations, setLocations]} >
      {children}
    </LocationContext.Provider>
  );
};
