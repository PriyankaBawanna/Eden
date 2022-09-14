import React from "react";
import Header from "./Header";
const WelcomeFirst = () => {
  return (
    <>
      <Header />
      <div className="inputContainer">
        <div className="heading">
          <span className="welcomeHeading">Welcome! First thing first...</span>
          <br></br>
          <span className="paraWelcome">
            you can change always change them later
          </span>
        </div>
        <div className="inputFrom">
          <div className="fullName">
            <label className="labelName">Full Name</label>
            <input
              type="text "
              className="inputFiled"
              placeholder="Full Name"
            />
          </div>
          <div className="fullName">
            <label className="labelName">Display Name</label>
            <input
              type="text"
              name="name"
              className="inputFiled"
              placeholder="Display Name"
            />
          </div>
          <button type="button" className="submitButton">
            Create Workspace
          </button>
        </div>
      </div>
    </>
  );
};
export default WelcomeFirst;
