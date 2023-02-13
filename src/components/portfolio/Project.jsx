import React, { Component } from "react";
import { motion } from "framer-motion";
import imgdev from "../../data/media/imgdev.jpg";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    let { name, languagesIcons, source, info } = this.props.item;
    return (
      <motion.div
        tabIndex="0"
        className="project"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ type: "spring", dumping: 10 }}
      >
        <motion.div
          className="icons"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ duration: 0.3, type: "spring", damping: 5 }}
        >
          {languagesIcons.map((icon) => {
            return <i className={icon} key={icon}></i>;
          })}
          <h3>{name}</h3>
        </motion.div>

        <img
          src={imgdev}
          alt="projets de developpement"
          onClick={this.handleInfo}
        />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>

                <div className="sourceCode">
                  <motion.a
                    href={source}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="button"
                    whileHover={{
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                  >
                    code source sur Git
                  </motion.a>
                </div>
              </div>
              <p className="text">{info}</p>
              <motion.div
                className="button return"
                onClick={this.handleInfo}
                whileHover={{
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                revenir au menu
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    );
  }
}
