import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
const dateFormat = require("dateformat");


function ViewReservation() {
  const [reservations, setReservations] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [user, setUser] = useState([]);

  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  console.log(id);

  useEffect(() => {
  // Load user with current ID and store them with setUser
    API.getUser(id)
      .then((res) => {
        setUser(res.data);
        console.log("user:", res.data);
      })
      .catch((err) => console.log(err));
// Load all reservations and store them with setReservations
    API.getReservations()
      .then((res) => {
        setReservations(res.data);
        console.log("reservations data: ", res.data);
      })
      .catch((err) => console.log(err));
    
  }, []);


// Load yard details on button click
  const handleYardButtonClick = (e) => {
    e.preventDefault();
    // FIX SO yard_id IS UNIQUE TO BUTTON
    window.location.replace("/yard/" + reservations.yard_id);
  };

  // Load makereservation on button click

  const handleEditButtonClick = (e) => {
    e.preventDefault();
        // FIX SO _id IS UNIQUE TO BUTTON
    window.location.replace("/makereservation/" + reservations._id);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
        <h1>{user.fname}'s Reservations</h1>
        </div>
        <div className="row">
          <div className="col-lg-10">
          <List>
                {reservations.map((reservation) => (
              <ListItem>
              <div className="row">
                  <div className="col-lg-4">
                  {/* UPDATE TO yard.name */}
                  {reservation.yard_id}
                  </div>
                  <div className="col-lg-4">
                  {dateFormat(reservation.datetime, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                  <Button className="edit" onClick={handleYardButtonClick}>
                      View Yard
                    </Button>
                  <Button className="edit" onClick={handleEditButtonClick}>
                      Edit
                    </Button>
              </div>
            </ListItem>
            ))}
          </List>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReservation;
