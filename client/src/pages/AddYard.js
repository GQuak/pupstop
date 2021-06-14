import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import API from "../utils/API";

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#34374c",
  },
};

function AddYard() {
  const [formObject, setFormObject] = useState({});
  const [users, setUsers] = useState([]);

  // get id for current user
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
    // FIX POST ROUTE
    if (
      formObject.name &&
      formObject.description &&
      formObject.address &&
      formObject.city &&
      formObject.state &&
      formObject.zip
    ) {
      API.saveYard({
        name: formObject.name,
        description: formObject.description,
        address: formObject.address,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
        fence: formObject.fence,
        water: formObject.water,
        hasPets: formObject.hasPets,
        user_id: users._id,
      })
        .then((res) => {
          console.log("click then ", res.data);
          // API.getUser(res.data._id);
          // window.location.replace("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <h1 style={styles.form}>Add a yard</h1>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <form className="form addyard-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name-yard"
                name="name"
                placeholder="Give your yard a name"
                onChange={handleInputChange}
              />
              <label for="description-yard">
                Give owners a brief description about your yard
              </label>
              <input
                type="text"
                className="form-control"
                id="description-yard"
                name="description"
                placeholder="Yard description"
                onChange={handleInputChange}
              />
              <label for="address-yard">Address</label>
              <input
                type="text"
                className="form-control"
                id="address-yard"
                name="address"
                placeholder="Street"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control"
                id="city-yard"
                name="city"
                placeholder="City"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <select
                className="form-input"
                id="state-yard"
                name="state"
                style={styles.form}
                onChange={handleInputChange}
              >
                <option value="AL">Alabama</option>
                <option value="" disabled selected>
                  State
                </option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virgina</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="zip-yard"
                name="zip"
                placeholder="ZIP"
                onChange={handleInputChange}
              />
              <input
                type="number"
                className="form-control"
                id="rate-yard"
                name="rate"
                placeholder="Hourly Rate"
                onChange={handleInputChange}
              />
              <input
                type="checkbox"
                id="fence-yard"
                name="fence"
                value="1"
                onChange={handleInputChange}
              />
              <label for="fence-yard"> My yard has a fence</label>
              <br />
              <input
                type="checkbox"
                id="water-yard"
                name="water"
                value="1"
                onChange={handleInputChange}
              />
              <label for="water-yard">My yard has water available</label>
              <br />
              <input
                type="checkbox"
                id="pets-yard"
                name="hasPets"
                value="1"
                onChange={handleInputChange}
              />
              <label for="pets-yard">There will be other pets at my yard</label>
              <br></br>
              <Button
                className="default"
                style={styles.form}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default AddYard;
