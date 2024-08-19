import React, { useState } from "react";

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const changeshow = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <button onClick={changeshow}>{showContent ? "hide" : "show"}</button>
      {showContent ? (
        <p className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          omnis ea soluta dolor. Accusantium ab odit fugit natus eligendi
          praesentium?
        </p>
      ) : (
        <h3 style={{ padding: "20px" }}>data hidden</h3>
      )}
    </div>
  );
};

export default Index;
