import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Centre d'interets</h3>
      <ul>
        <li className="hobby">
          {" "}
          <i className="fas fa-plane"></i>
          <span>Aviation</span>
        </li>
        <li className="hobby">
          {" "}
          <i className="fas fa-desktop"></i>
          <span>Nouvelles technologies</span>
        </li>
        <li className="hobby">
          {" "}
          <i className="fas fa-university"></i>
          <span>Crypto</span>
        </li>
        <li className="hobby">
          {" "}
          <i className="fas fa-running"></i>
          <span>Sport</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
