import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 2 },
      { id: 2, value: "CSS", xp: 1.8 },
      { id: 4, value: "Python", xp: 1.2 },
      { id: 5, value: "WordPress/PHP", xp: 1.1 },
      { id: 6, value: "C++/C#", xp: 0.97 },
      { id: 7, value: "Bash/Linux", xp: 0.9 },
    ],
    framework: [
      { id: 1, value: "React/ReactNative", xp: 2 },
      { id: 2, value: "Bootstrap", xp: 1.5 },
      { id: 3, value: "Django", xp: 1.2 },
      { id: 4, value: "Node", xp: 1.8 },
      { id: 5, value: "Selenium", xp: 1 },
      { id: 6, value: "RobotFramework", xp: 1 },
    ],
  };

  render() {
    let { languages, framework } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          className="languagesDisplay"
          title="languages"
          languages={languages}
        />
        <ProgressBar
          className="frameworkDisplay"
          title="framework"
          languages={framework}
        />
      </div>
    );
  }
}
