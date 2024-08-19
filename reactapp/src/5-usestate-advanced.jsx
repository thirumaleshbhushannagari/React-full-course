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

  const changesumbit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: messages.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setMessages({ text: "", id: "" });
  };

  const deletesumbit = (id) => {
    const newTodos = list.filter((eachitem) => {
      return eachitem.id !== id;
    });
    setList(newTodos);
  };

  const editbutton = (id) => {
    console.log(id);
    setEdit({
      ...edit,
      id: id,
      isEditing: true,
    });
    const editItem = list.find((eachitem) => eachitem.id === id);
    setMessages({
      ...messages,
      text: editItem.text,
      id: editItem.id,
    });
  };

  const handlesumbit = (e) => {
    e.preventDefault();
    const newitem = list.map((item) => {
      if (item.id === edit.id) {
        return {
          text: messages.text,
          id: edit.id,
        };
      } else {
        return item;
      }
    });
    setList(newitem);
    setMessages({ text: "", id: "" });
    setEdit({ id: "", isEditing: false });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="messafe"
          id="message"
          placeholder="ENTER YOUR TEXT"
          value={messages.text}
          onChange={changemessage}
        />
        {edit.isEditing ? (
          <button type="submit" onClick={handlesumbit}>
            EDIT
          </button>
        ) : (
          <button type="submit" onClick={changesumbit}>
            ADD
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <p>there is no list item</p>}
      <ul>
        {list.map((eachitem) => {
          const { text, id } = eachitem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => editbutton(id)}>edit</button>
              <button onClick={() => deletesumbit(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
