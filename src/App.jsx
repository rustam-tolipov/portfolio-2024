import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import ReactGA from "react-ga4";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Loader from "./ui/Loader";
import { ProjectProvider } from "./context/ProjectContext";
import Project from "./pages/Project";

const TRACKING_ID = import.meta.env.VITE_SECRET_MEASUREMENT_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  const pageView = () => {
    ReactGA.send(window.location.pathname + window.location.search);
  };

  useEffect(() => {
    window.addEventListener("scroll", pageView);
    return () => {
      window.removeEventListener("scroll", pageView);
    };
  }, []);

  return (
    <ProjectProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/:link" element={<Project />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
