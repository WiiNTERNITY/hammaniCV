import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import DEVELOPPEUR_FULL_STACK from "../media/DEVELOPPEUR_FULL_STACK.pdf";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <motion.div
        className="homeContent"
        initial={{ scaleX: 0.8 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 1 }}
      >
        <div className="content">
          <h1>Hammani Mounir</h1>
          <motion.h2
            initial={{ y: -350 }}
            animate={{ y: -10 }}
            exit={{ y: -350 }}
            transition={{ delay: 0.3 }}
          >
            Developpeur FullStack
          </motion.h2>
          <motion.div className="pdf">
            <motion.a
              href={DEVELOPPEUR_FULL_STACK}
              rel="norefferer noreferrer"
              target="_blank"
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              aria-label="Liens de telechargement curriculum vitae"
            >
              Telecharger mon CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
    // </motion.div>
  );
};

export default Home;
