import React from "react";

const styles = {
  form: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
};

function Signup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <img
            src="https://drive.google.com/uc?export=view&id=1AoWVQugChZV9non-0YnO7qY6qyfR9EzV"
            style={styles.form}
          />
        </div>
        <div className="col-sm-4"></div>
      </div>

      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <form className="form signup-form">
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="fname-signup"
                placeholder="First Name"
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="lname-signup"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="email-signup"
                placeholder="Email"
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="password"
                id="password-signup"
                placeholder="Password"
              />
            </div>
            <div className="form-group" style={styles.form}>
              <button className="btn btn-primary" type="submit">
                Create my Account
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Signup;
