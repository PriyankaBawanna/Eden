import React from "react";
import user from "../Shared/user.jpg";
import team from "../Shared/team.png";
const Plannining = () => {
  return (
    <>
      <div className="plaaningPage">
        <div className="heading">
          <span className="welcomeHeading">
            How are you planning to use Eden ?
          </span>
          <br></br>
          <span className="paraWelcome">
            we'll streamline your setup experience accordingly.
          </span>
        </div>
        <div className="useOfEden">
          <div className="forMyself">
            <img src={user} className="imgUser" />
            <h6>For my self</h6>
            <p className="para">
              write better.Think more clearly.Stay organized{" "}
            </p>
          </div>
          <div className="forTeam">
            <img src={team} className="imgUser" />
            <h6>With my team</h6>
            <p className="para">
              Wikis,docs,tasks & project , all in one place
            </p>
          </div>
        </div>
        <button type="button" className="submitButton">
          Create Workspace
        </button>
      </div>
    </>
  );
};
export default Plannining;
