import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Knowledges from "../pages/Knowledges";

const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const PortFolio = lazy(() => import("../pages/PortFolio"));

function AnimatedRoute() {
  const location = useLocation();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/competences" element={<Knowledges />} />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default AnimatedRoute;
