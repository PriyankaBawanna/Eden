import React from "react";
import Button from "react-bootstrap/Button";

const SecondPage = () => {
  return (
    <>
      <div className="inputContainer">
        <div className="heading">
          <span className="welcomeHeading">
            Let's up a home for all your work
          </span>
          <br></br>
          <span className="paraWelcome">
            you can always create another Workspace later
          </span>
        </div>
        <div className="inputFrom">
          <div className="fullName">
            <label className="labelName">Work space</label>
            <input type="text " className="inputFiled" placeholder="Eden" />
          </div>
          <div className="fullName">
            {/* <label className="labelName">
                  Work space url<span className="optional"> (optional)</span>
                </label> */}

            <div className="workSpaceEx ">
              <label className="labelName">
                Work space url<span className="optional"> (optional)</span>
              </label>
              <div className=" workSpace">
                <span className="input-group-text " id="basic-addon3">
                  www.edn.com/
                </span>
                <input
                  type="text"
                  class="form-control inputWorkSpace"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </div>
          <button type="button" className="submitButton">
            Create Workspace
          </button>
        </div>
      </div>
    </>
  );
};
export default SecondPage;
