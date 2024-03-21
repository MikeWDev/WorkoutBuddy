import React from "react";

const LoginEgzample = () => {
  return (
    <div className="ex-login-con">
      <h3>
        Not sure <span>where</span> to start?
        <br />
        Try already created <span>users</span>
      </h3>
      <div className="ex-login">
        <div className="ex-field">
          <div className="ex-email">
            <p>
              <span>Email: </span> gosia.kowalska@gmail.com
            </p>
          </div>
          <div className="ex-password">
            <p>
              <span>Password: </span> qwe123QWE!@#
            </p>
          </div>
        </div>
        <div className="ex-field">
          <div className="ex-email">
            <p>
              <span>Email: </span> jacek.kowalski@onet.pl
            </p>
          </div>
          <div className="ex-password">
            <p>
              <span>Password: </span> qwe123QWE!@#
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default LoginEgzample;
