import React, { useState } from "react";

const Index = () => {
  const initialarray = [
    {
      name: "john doe",
      age: 25,
      city: "New York",
    },
    {
      name: "ravi",
      age: 20,
      city: "Mumbai",
    },
    {
      name: "sai",
      age: 30,
      city: "Chennai",
    },
  ];
  const [data, setData] = useState(initialarray);

  return (
    <div>
      {data.map((item, index) => {
        const { name, age, city } = item;
        return (
          <li key={index}>
            <div>My Name is:{name}</div>
            <div>
              {" "}
              My age is: <strong>{age}</strong>
            </div>
            <div>
              {" "}
              My city is: <span>{city}</span>
            </div>
            <button
              style={{ color: "red" }}
              onClick={() =>
                setData(
                  data.filter((item) => {
                    return item.name !== name;
                  })
                )
              }
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Index;
