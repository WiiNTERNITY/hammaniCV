import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Contact = () => {
  const createNotificationPhone = (type) => {
    return () => {
      NotificationManager.success("Téléphone copié", " ", 2300);
    };
  };
  const createNotificationEmail = (type) => {
    return () => {
      NotificationManager.success("Email copié", " ", 2300);
    };
  };
  const createNotificationInfoOne = () => {
    return () => {
      NotificationManager.info("Cliqué sur l'élèment à copier", " ", 2300);
    };
  };
  const createNotificationInfoTwo = () => {
    return () => {
      NotificationManager.info("Cliqué sur l'élèment à copier", " ", 2300);
    };
  };

  const accessibilityPhone = (event) => {
    if (event.keyCode === 13) {
      console.log(event.keyCode);
      NotificationManager.success("Téléphone copié", " ", 2300);
    }
  };
  const accessibilityEmail = (event) => {
    if (event.keyCode === 13) {
      NotificationManager.success("Email copié", " ", 2300);
    }
  };

  return (
    <div className="contact">
      <Navigation />
      <motion.div
        className="contactContent"
        initial={{ scaleX: 0.8 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 1 }}
      >
        <div className="header"></div>

        <motion.div
          className="contactBox"
          initial={{ y: -500 }}
          animate={{ y: -10 }}
          exit={{ y: -500, transition: { damping: 0, duration: 0.2 } }}
          transition={{ type: "spring", damping: 5 }}
        >
          <h1>CONTACT</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Lille</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="07.45.34.34.11">
                <span
                  tabIndex="0"
                  onKeyDown={accessibilityPhone}
                  aria-label="numero de telephone est le 07.45.34.34.11 taper entrer pour le copié"
                  className="clickInput"
                  onClick={createNotificationPhone("success")}
                  onMouseOver={createNotificationInfoOne("info")}
                >
                  07 45 34 34 11
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="hammani_mounir@outlook.fr">
                <span
                  tabIndex="0"
                  onKeyDown={accessibilityEmail}
                  aria-label="mon Email est hammani_mounir@outlook.fr taper entrer pour le copié"
                  className="clickInput"
                  onClick={createNotificationEmail("success")}
                  onMouseOver={createNotificationInfoTwo("info")}
                >
                  hammani_mounir@outlook.fr
                </span>
              </CopyToClipboard>
            </li>
          </ul>
          <NotificationContainer />
        </motion.div>

        <div className="socialNetwork">
          <motion.ul initial={{ x: 0 }} animate={{ x: 1 }} exit={{ x: 0 }}>
            <motion.a
              aria-label="liens vers compte professionnel linkedin"
              whileHover={{
                scale: 1.25,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              href="https://linkedin.com/in/mounir-hammani-952585246"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </motion.a>

            <motion.a
              aria-label="lien vers repertoire github wiinternity"
              whileHover={{
                scale: 1.25,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              href="https://github.com/WiiNTERNITY/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </motion.a>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
