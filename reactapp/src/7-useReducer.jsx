import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "DELETE_ITEM ") {
    const newperson = state.data.filter((eachitem) => {
      return eachitem.id !== action.payload;
    });
    // console.log(newperson);
    return {
      ...state,
      data: newperson,
      length: newperson.length,
    };
  }
};

const Final = () => {
  const initialstate = {
    data: [
      {
        id: "12345",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      {
        id: "qwertt",
        name: "Emma Doe",
        email: "emma.doe@gmail.com",
      },
      {
        id: "asdfgh",
        name: "Alice Doe",
        email: "alice.doe@gmail.com",
      }
    ],
    length: 3,
  };
  const [state, dispatch] = useReducer(reducer, initialstate);

  const handledelete = (id) => {
    dispatch({ type: "DELETE_ITEM ", payload: id });
  };
  return (
    <div>
      <h1>Current User Length:{state.length}</h1>
      {state.data.map((each) => {
        const { id, name, email } = each;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={() => handledelete(id)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Final;
