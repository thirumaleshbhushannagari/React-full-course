import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    status: false,
  });
  const fetchUserData = async (apiurl) => {
    setLoading(true);
    setError({ message: "", status: false }); // Clear error message on successful fetch.
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      setUsers(data);
      setLoading(false);
      // If response status is not ok (2xx), throw an error.
      setError({
        message: "",
        status: false,
      });
      if (response.status === 404) {
        throw new Error("User not found.");
      }
    } catch (error) {
      setLoading(false);
      setError({
        message: error.message || "An error occurred while fetching data.",
        status: true,
      });
    }
  };
  useEffect(() => {
    fetchUserData(URL);
  }, []);

  if (loading) {
    return <h2 style={{ color: "blue" }}>Loading...</h2>; // Show loading message while data is being fetched.
  }

  if (error?.status) {
    return <h2 style={{ color: "red" }}>{error.message}</h2>; // Show error message if fetch fails.
  }
  return (
    <div>
      <h2>USE EFFECT EXAMPLE -1</h2>
      <ul className="container">
        {users.map((user) => {
          const { name, id, email } = user;
          return (
            <li key={id}>
              <div className="name">{name}</div>
              <div className="email">{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
