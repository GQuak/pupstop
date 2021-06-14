import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import API from "../utils/API";
const dateFormat = require("dateformat");

function ViewReservation() {
  const [reservations, setReservations] = useState([]);

  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  console.log(id);

  useEffect(() => {
    loadReservations();
  }, []);
  // Load all reservations and store them with setReservations
  function loadReservations() {
    API.getReservations()
      .then((res) => {
        setReservations(res.data);
        console.log("reservations data: ", res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteReservation(id) {
    API.deleteReservation(id)
      .then((res) => loadReservations())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>My Reservations</h1>
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
                      {dateFormat(
                        reservation.datetime,
                        "dddd, mmmm dS, yyyy, h:MM:ss TT"
                      )}
                    </div>

                    <Button className="edit">
                      <Link
                        // ADD USER ID TO ROUTE
                        to={`/yard/${reservation.yard_id}`}
                        style={{ color: "white" }}
                      >
                        View Yard
                      </Link>
                    </Button>
                    <Button
                      className="edit"
                      id={reservation._id}
                      onClick={() => deleteReservation(reservation._id)}
                    >
                      Cancel Reservation
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
