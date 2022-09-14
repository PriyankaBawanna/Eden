import WelcomeFirst from "./WelcomePage/WelcomeFirst";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SecondPage from "./WelcomePage/SecondPage";
import Plannining from "./WelcomePage/Planning";
import CongratulationsPage from "./Congratulations/CongratulationsPage";
function App() {
  return (
    <React.Fragment>
      <WelcomeFirst />
      {/* <button className="btn btn-success">ccc</button> */}
      <SecondPage />
      <Plannining />

      <CongratulationsPage />
    </React.Fragment>
  );
}

export default App;
