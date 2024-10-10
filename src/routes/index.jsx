import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Video from "../assets/video.mp4";

const CustomRoute = () => {
  const Home = lazy(
    () =>
      new Promise((resolve) => {
        return setTimeout(() => resolve(import("../pages/Home")), 3000);
      })
  );
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
                <video className="relative top-0 left-0  w-[100%] h-[100vh] object-cover" autoPlay muted loop src={Video} >
                  
                </video>
            }
          >
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default CustomRoute;
