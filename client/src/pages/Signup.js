import React, { useState } from "react";
import API from "../utils/API";

const styles = {
  form: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
};

function Signup() {
  // const [userState, setUserState] = useState({
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   password: "",
  //   image: "https://drive.google.com/uc?export=view&1pnj52qiutq_F--Z84vd5FfjKwP-Psne0"
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    console.log(formObject);
    if (formObject.email && formObject.password) {
      API.saveUsers({
        fname: formObject.fname,
        lname: formObject.lname,
        email: formObject.email,
        password: formObject.password,
      })
        .then((res) => {
          console.log("click then ", res.data);
          // API.getUser(res.data._id);
          window.location.replace("/");
        })
        .catch((err) => console.log(err));
    }
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
                name="fname"
                placeholder="First Name (required)"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="lname-signup"
                name="lname"
                placeholder="Last Name (required)"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="email-signup"
                name="email"
                placeholder="Email (required)"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="password"
                id="password-signup"
                name="password"
                placeholder="Password (required)"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
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
