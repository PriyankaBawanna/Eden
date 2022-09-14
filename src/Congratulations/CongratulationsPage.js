import React from "react";
import confirm from "../Shared/confirm.png";
import Header from "../WelcomePage/Header";
const CongratulationsPage = () => {
  return (
    <>
      <Header />
      <div className="lastPage">
        <div className="confirmPage">
          <img src={confirm} className="confirmImg" />
          <h3>Congratulations,Eren!</h3>
          <p className="para">
            you have completed onboarding,you can start using the Eden!
          </p>
          <button type="button" className="submitButton">
            Launch Eden
          </button>
        </div>
      </div>
    </>
  );
};
export default CongratulationsPage;
