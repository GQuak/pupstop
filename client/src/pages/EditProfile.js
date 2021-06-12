import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import API from "../utils/API";

const styles = {
  form: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
};

function EditProfile() {
    
  const [formObject, setFormObject] = useState({});
  const [users, setUsers] = useState([]);

  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  useEffect(() => {
    API.getUser(id)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    console.log(formObject);
      API.updateUsers({
        fname: formObject.fname,
        lname: formObject.lname,
        email: formObject.email,
        // image: 
      })
        .then((res) => {
          console.log("click then ", res.data);
          // API.getUser(res.data._id);
          window.location.replace("/");
        })
        .catch((err) => console.log(err));
    }

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
        <div className="col-sm-4" style={styles.form}>
          <form className="form signup-form">
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="fname-signup"
                name="fname"
                placeholder={users.fname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="lname-signup"
                name="lname"
                placeholder={users.lname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <input
                className="form-input"
                type="text"
                id="email-signup"
                name="email"
                placeholder={users.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group" style={styles.form}>
              <Button className="default" type="submit" onClick={handleSubmit}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  )
}

export default EditProfile;