import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import photoIDS from "../media/photoID.png";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            tabIndex="0"
            name="photo d'identité"
            src={photoIDS}
            alt="élément d'identité"
          />
          <motion.h3
            aria-label="mon nom est Hammani Mounir"
            initial={{ y: -350 }}
            animate={{ y: -10 }}
            exit={{ y: -350 }}
            transition={{ delay: 0.1 }}
          >
            Hammani Mounir
          </motion.h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <motion.li
            aria-label="section acceuil"
            whileHover={{
              x: [0, 5, 0],
              transition: { type: "tween", repeat: Infinity, duration: 0.65 },
            }}
          >
            <NavLink to="/" activeClassName="navActive">
              <i className="fa fa-home"></i>
              <motion.span>Acceuil</motion.span>
            </NavLink>
          </motion.li>
          <motion.li
            aria-label="section compétences"
            whileHover={{
              x: [0, 5, 0],
              transition: { type: "tween", repeat: Infinity, duration: 0.65 },
            }}
          >
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fa fa-mountain"></i>
              <span>Competences</span>
            </NavLink>
          </motion.li>
          <motion.li
            aria-label="section portfolio"
            whileHover={{
              x: [0, 5, 0],
              transition: { type: "tween", repeat: Infinity, duration: 0.65 },
            }}
          >
            <NavLink to="/portfolio" activeClassName="navActive">
              <i className="fa fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </motion.li>
          <motion.li
            aria-label="section contact"
            whileHover={{
              x: [0, 5, 0],
              transition: { type: "tween", repeat: Infinity, duration: 0.65 },
            }}
          >
            <NavLink to="/contact" activeClassName="navActive">
              <i className="fa fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </motion.li>
        </ul>
      </div>

      <div className="socialNetwork">
        <motion.ul>
          <motion.li
            aria-label="compte professionnel linkedin"
            name="linkedin"
            whileHover={{
              scale: 1.25,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <a
              name="linkedin"
              aria-label="liens vers compte professionnel linkedin"
              href="https://www.linkedin.com/in/mounir-hammani-952585246"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </motion.li>
          <motion.li
            name="mail"
            whileHover={{
              scale: 1.25,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <a
              aria-label="envoyer un email"
              name="mailTo"
              href="mailto:hammani_mounir@outlook.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>@</i>
            </a>
          </motion.li>
          <motion.li
            name="github"
            whileHover={{
              scale: 1.25,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <a
              name="agithub"
              href="https://github.com/WiiNTERNITY/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="liens vers repertoire github wiinternity"
            >
              <i className="fab fa-github"></i>
            </a>
          </motion.li>
        </motion.ul>
        <div className="signature">
          <NavLink to="/" activeClassName="signature">
            <p>Dev:Hammani Mounir-2022</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
