import React, { useState } from "react";
import Button from "../components/Button";

const styles = {
  form: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
};

function Signup() {
  const [userState, setUserState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    image:
      "https://drive.google.com/uc?export=view&1pnj52qiutq_F--Z84vd5FfjKwP-Psne0",
  });

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
          <form className="form signup-form">
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="fname-signup"
                placeholder="First Name"
                onChange={(e) =>
                  setUserState({ ...userState, fname: e.target.value })
                }
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="lname-signup"
                placeholder="Last Name"
                onChange={(e) =>
                  setUserState({ ...userState, lname: e.target.value })
                }
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="email-signup"
                placeholder="Email"
                onChange={(e) =>
                  setUserState({ ...userState, email: e.target.value })
                }
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="password"
                id="password-signup"
                placeholder="Password"
                onChange={(e) =>
                  setUserState({ ...userState, password: e.target.value })
                }
              />
            </div>
            <div className="form-group" style={styles.form}>
              <Button className="default" type="submit" onClick={handleSubmit}>
                Create my Account
              </Button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Signup;
