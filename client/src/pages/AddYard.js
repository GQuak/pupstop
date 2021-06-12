import React, { useState } from "react";

const styles = {
  form: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
};

function AddYard() {
  const [formObject, setFormObject] = useState({});
  const [users, setUsers] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  // get id for current user
  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  useEffect(() => {
    API.getUser(id)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    console.log(formObject);
    if (formObject.email && formObject.password) {
      API.saveUsers({
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
          <form className="form addyard-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name-yard"
                placeholder="Give your yard a name"
                onChange={(e) =>
                  setYardState({ ...yardState, name: e.target.value })
                }
              />
              <label for="description-yard">
                Give owners a brief description about your yard
              </label>
              <input
                type="text"
                className="form-control"
                id="description-yard"
                placeholder="Yard description"
                onChange={(e) =>
                  setYardState({ ...yardState, description: e.target.value })
                }
              />
              <label for="address-yard">Address</label>
              <input
                type="text"
                className="form-control"
                id="address-yard"
                placeholder="Street"
                onChange={(e) =>
                  setYardState({ ...yardState, address: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control"
                id="city-yard"
                placeholder="City"
                onChange={(e) =>
                  setYardState({ ...yardState, city: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <select
                className="form-input"
                id="state-yard"
                name="yard-state"
                style={styles.form}
                onChange={(e) =>
                  setYardState({ ...yardState, state: e.target.value })
                }
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
                placeholder="ZIP"
                onChange={(e) =>
                  setYardState({ ...yardState, zip: e.target.value })
                }
              />
              <input
                type="number"
                className="form-control"
                id="rate-yard"
                placeholder="Hourly Rate"
                onChange={(e) =>
                  setYardState({ ...yardState, rate: e.target.value })
                }
              />
              <input
                type="checkbox"
                id="fence-yard"
                value="1"
                onChange={(e) =>
                  setYardState({ ...yardState, fence: e.target.value })
                }
              />
              <label for="fence-yard"> My yard has a fence</label>
              <br />
              <input
                type="checkbox"
                id="water-yard"
                value="1"
                onChange={(e) =>
                  setYardState({ ...yardState, water: e.target.value })
                }
              />
              <label for="water-yard">My yard has water available</label>
              <br />
              <input
                type="checkbox"
                id="pets-yard"
                value="1"
                onChange={(e) =>
                  setYardState({ ...yardState, hasPets: e.target.value })
                }
              />
              <label for="pets-yard">There will be other pets at my yard</label>
              <br></br>
              <button
                className="btn btn-primary"
                type="submit"
                style={styles.form}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default AddYard;
