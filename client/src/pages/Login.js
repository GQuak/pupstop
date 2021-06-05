import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <form className="form signup-form">
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                id="email-login"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                id="password-login"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Login;
