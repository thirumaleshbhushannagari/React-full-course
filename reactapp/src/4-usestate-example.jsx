import React, { useState } from "react";
const Index = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changesumbit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="wrapper">
      <h1>login</h1>
      <form onSubmit={changesumbit}>
        <div className="input-box">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="input-box">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>email</label>
        </div>
        <div className="input-box">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>password</label>
        </div>
        <div className="forgot-password">
          <label>
            <input type="checkbox" />
            Remeber me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
