import React from "react";

const array = {
  name: "hello world",
  age: 20,
  city: "New York",
  address: "123 Main St",
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={array}>{children}</UserContext.Provider>;
};
