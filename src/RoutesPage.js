import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeFirst from "./WelcomePage/WelcomeFirst";
import CongratulationsPage from "./Congratulations/CongratulationsPage";
import Plannining from "./WelcomePage/Planning";
import SecondPage from "./WelcomePage/SecondPage";
import Header from "./WelcomePage/Header";
const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeFirst />} />
          {/* <Route path="/WelcomeFirst" element={<WelcomeFirst />} /> */}
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/Planning" element={<Plannining />} />
          <Route
            path="/CongratulationsPage"
            element={<CongratulationsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutesPage;
