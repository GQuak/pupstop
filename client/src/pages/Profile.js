import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SearchResult from "../pages/SearchResult";
import API from "../utils/API";

function Profile() {
  const [users, setUsers] = useState([]);

  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  useEffect(() => {
    API.getUser(id)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleReservationsButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/reservations/" + id);
  };
  const handleEditButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/edit/profile/" + id);
  };
  const handleYardButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/addyard/" + id);
  };


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <img src={users.image} alt={users.fname} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  {users.fname} {users.lname}
                </h1>
                <p> {/* {users.yards.city}, {users.yards.state} */}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Button onClick={handleReservationsButtonClick}>Reservations</Button>
                <Button onClick={handleEditButtonClick}>Edit Profile</Button>
              </div>
            </div>
            <hr />
            <div className="row">
              <Button className="edit" onClick={handleYardButtonClick}>Add Yard</Button>
            </div>
              <SearchResult />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
