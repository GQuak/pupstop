import React, { useState, useEffect } from "react";
import Button from "../components/Button";
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
    API.getReservation(id)
      .then((res) => {
        setReservations(res.data);
        console.log("reservations data: ", res.data);
      })
      .catch((err) => console.log(err));
    // API.getUser(id)
    //   .then((res) => {
    //     setUser(res.data);
    //     console.log("user:", res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/edit/");
  };

  return (
    <div>
      <div className="container">
        <div className="row">{/* <h3>{user.fname}'s Reservations</h3> */}</div>

        <div className="row">
          <div className="col-lg-10">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <a href="/yard/{{yardId}}">{reservations.datetime}</a>
                  </td>
                  <td>
                    <Button className="default" onClick={handleButtonClick}>
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReservation;
