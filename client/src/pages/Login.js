import React from "react";

const styles = {
  login: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
};

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <img
            src="https://drive.google.com/uc?export=view&id=1AoWVQugChZV9non-0YnO7qY6qyfR9EzV"
            style={styles.login}
          />
        </div>
        <div className="col-sm-4"></div>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <form className="form signup-form">
            <div className="form-group" style={styles.login}>
              <input
                className="form-input"
                type="text"
                id="email-login"
                placeholder="Email"
              />
            </div>
            <div className="form-group" style={styles.login}>
              <input
                className="form-input"
                type="text"
                id="password-login"
                placeholder="Password"
              />
            </div>
            <div className="form-group" style={styles.login}>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <span style={styles.login}>
            Don't have an account? <a href="/signup"> Sign up.</a>
          </span>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Login;
