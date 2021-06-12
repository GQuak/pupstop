import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function ViewReservation() {
  const [reservations, setReservations] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [user, setUser] = useState([]);

  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  console.log(id);

  // Load all books and store them with setBooks
  useEffect(() => {
    API.getUser(id)
      .then((res) => {
        setUser(res.data);
        console.log("user:", res.data);
      })
      .catch((err) => console.log(err));
    API.getReservations()
      .then((res) => {
        setReservations(res.data);
        console.log("reservations data: ", res.data);
      })
      .catch((err) => console.log(err));
    
  }, []);

  const handleYardButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/yard/" + reservations.yard_id);
  };
  const handleEditButtonClick = (e) => {
    e.preventDefault();
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
                  {reservation.yard_id}
                  </div>
                  <div className="col-lg-4">
                  {reservation.datetime}</div>
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
