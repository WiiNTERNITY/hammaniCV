import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData.js";
import Project from "./Project";
import { motion } from "framer-motion";

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,

    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "react" },
      { id: 3, value: "ReactNative" },
      { id: 4, value: "Python" },
    ],
    selectedRadio: "javascript",
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({
      selectedRadio: radio,
    });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;
    return (
      <motion.div
        className="portfolioContent"
        initial={{ x: 0.8 }}
        animate={{ x: 1 }}
        exit={{ x: 0 }}
      >
        <motion.ul
          className="radioDisplay"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: -300 }}
        >
          {radios.map((radio) => {
            return (
              <motion.li
                key={radio.id}
                whileHover={{
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  scale: 1.3,
                }}
                transition={{ type: "spring", dumping: 1 }}
              >
                <input
                  type="radio"
                  name="selection des languages"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value} tabIndex="0">
                  {radio.value}
                </label>
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item, key) => {
              return <Project key={item.id} item={item} />;
            })}
        </motion.div>
      </motion.div>
    );
  }
}
