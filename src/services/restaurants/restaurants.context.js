import React, { createContext } from "react";

import { restaurantRequest } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider
      value={{ restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9] }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
