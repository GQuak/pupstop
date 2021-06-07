import React, { useState } from "react";
import Button from "../components/Button"

const styles = {
  form: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
};

function Login() {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <img
            src="https://drive.google.com/uc?export=view&id=1AoWVQugChZV9non-0YnO7qY6qyfR9EzV"
            style={styles.form}
            alt="PupStop Logo"
          />
        </div>
        <div className="col-sm-4"></div>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <form className="form signup-form" onSubmit={handleSubmit}>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="email-login"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="password-login"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group" style={styles.form}>
            <Button className="default" onClick={handleSubmit}>
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <span style={styles.form}>
            Don't have an account? <a href="/signup"> Sign up.</a>
          </span>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Login;
