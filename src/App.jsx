import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Loader from "./ui/Loader";
import { ProjectProvider } from "./context/ProjectContext";

function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
