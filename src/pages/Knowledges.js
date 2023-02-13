import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Experiences = lazy(() => import("../components/knowledges/Experiences"));
const Languages = lazy(() => import("../components/knowledges/Languages"));
const OtherSkills = lazy(() => import("../components/knowledges/OtherSkills"));
const Hobbies = lazy(() => import("../components/knowledges/Hobbies"));
const Navigation = lazy(() => import("../components/Navigation"));
const Knowledges = () => {
  return (
    <div className="knowledges">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <motion.div
          className="knowledgesContent"
          initial={{ scaleX: 0.8 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 1 }}
        >
          <Languages />
          <Experiences />
          <OtherSkills />
          <Hobbies />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Knowledges;
