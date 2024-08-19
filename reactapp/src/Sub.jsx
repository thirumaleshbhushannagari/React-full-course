import React, { useContext } from "react";
import { UserContext } from "./context/userDtails";

const Sub = ({ user }) => {
  const data = useContext(UserContext);
  console.log(data);
  const { name, city, age, address } = data;

  return (
    <div>
      <h3>Sub Component</h3>
      <p> Name: {name}</p>
      <p>state: {address}</p>
      <p>pincode: {city}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default Sub;
