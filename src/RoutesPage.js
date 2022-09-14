import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeFirst from 
const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
                  <Route path="/" element={<App/>}>
                  <Route  path="/WelcomeFirst" element={<WelcomeFirst />}/> 
                  
                  <Route path="/CongratulationsPage" element={<CongratulationsPage/>} /> 
                  <Route path="/Planning" element={<Planning/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutesPage;
