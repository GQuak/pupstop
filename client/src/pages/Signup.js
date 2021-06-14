import React, { useState } from "react";
import Button from "../components/Button";
import API from "../utils/API";

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#34374c",
  },
};

function Signup() {
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
      <h1 style={styles.form}>Create an Account</h1>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4" style={styles.form}>
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
