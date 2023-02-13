import React from "react";

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'Experiences</span>
        <span>1 an</span>
        <span> 2 ans</span>
      </div>
      <div>
        {props.languages.map((item, key) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <ul>
                <li key={item.id}>{item.value}</li>
              </ul>
              <div
                className="progressBar"
                style={{ width: progressBar }}
                name="barre de progression"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
