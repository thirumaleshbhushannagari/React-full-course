import React, { useState } from "react";

const Index = () => {
  const [list, setList] = useState([]);
  const [messages, setMessages] = useState({
    text: "",
    id: "",
  });

  const [edit, setEdit] = useState({
    id: "",
    isEditing: false,
  });

  const changemessage = (e) => {
    setMessages({
      ...messages,
      text: e.target.value,
    });
  };

  const changeadd = (e) => {
    e.preventDefault();
    let newTodo = {
      text: messages.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setMessages({
      text: "",
      id: "",
    });
  };

  const changedelete = (id) => {
    const newlist = list.filter((eachobj) => {
      return eachobj.id !== id;
    });
    setList(newlist);
  };

  const changeedit = (id) => {
    setEdit({
      ...edit,
      id: id,
      isEditing: true,
    });
    let newTodo = list.find((item) => item.id === id);
    setMessages({
      ...messages,
      text: newTodo.text,
      id: newTodo.id,
    });
  };

  const handleedit = (e) => {
    e.preventDefault();
    let newLists = list.map((listItem) => {
      if (listItem.id === edit.id) {
        return {
          text: messages.text,
          id: edit.id,
        };
      } else {
        return listItem;
      }
    });
    setList(newLists);
    setMessages({
      text: "",
      id: "",
    });
    setEdit({
      id: "",
      isEditing: false,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="ENTER YOUR TEXT"
          value={messages.text}
          onChange={changemessage}
        />
        <br />

        {edit.isEditing ? (
          <button onClick={handleedit} type="submit" style={{ margin: "20px" }}>
            EDIT
          </button>
        ) : (
          <button onClick={changeadd} type="submit" style={{ margin: "20px" }}>
            ADD
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h2>there is no list item</h2>}
      <ul>
        {list.map((each) => {
          const { text, id } = each;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => changeedit(id)}>edit</button>
              <button onClick={() => changedelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
