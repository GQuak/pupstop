import React, { useState } from "react";
import Button from "../components/Button";
import API from "../utils/API";

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    color: "#34374c",
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
      <h1 style={styles.form}>Login</h1>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4" style={styles.form}>
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
        <div className="col-sm-4">
          <p style={styles.form}>
            Don't have an account? <a href="/signup"> Sign up.</a>
          </p>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Login;
