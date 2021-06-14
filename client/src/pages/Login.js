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

// const loginFormHandler = async (event) => {
//   // Stop the browser from submitting the form so we can do so with JavaScript
//   event.preventDefault();

//   // Gather the data from the form elements on the page
//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();

//   if (email && password) {
//     console.log(email + " " + password);
//     // Send the e-mail and password to the server
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to log in");
//     }
//   }
// };

// const signupButton = async (event) => {
//   // Stop the browser from submitting the form so we can do so with JavaScript
//   event.preventDefault();
//   console.log("signup button click");

//   window.location = "/signup";
// };

function Login() {
  const [users, setUsers] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users.email + " " + users.password);
    if (users.email && users.password) {
      API.getLogin(users.email)
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    }
  };
  //   API.getUser(users.email)
  //   .then((res) => setUsers(res.data))
  //   .catch((err) => console.log(err));
  //   // Window.location.replace("/");
  // } else {
  //   alert("Failed to log in");
  // }

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
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="password"
                id="password-login"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
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
