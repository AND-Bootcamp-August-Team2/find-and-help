import React from "react";
import { FilterContextProvider } from "../contexts/filterContext";
import { LocationContextProvider } from "../contexts/locationContext";

// Beware - order of contexts added can be important if they rely on each other
const providers = [FilterContextProvider, LocationContextProvider];

const combineComponents = (...components) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

export const AppContextProvider = combineComponents(...providers);
