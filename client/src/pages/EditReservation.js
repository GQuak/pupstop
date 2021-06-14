import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { render } from "react-dom";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";

function EditReservation() {
  const [reservations, setReservations] = useState([]);
  const [formObject, setFormObject] = useState({});

 const handleScheduled = (dateTime) => {
    // UPDATE RESERVATION BY ID
  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  console.log(id);

  // Load all reservations and store them with setReservations
  useEffect(() => {
    API.updateReservation(id)
      .then((res) => {
        setReservations(res.data);
        console.log("reservations data: ", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    }
  };

// // UPDATE RESERVATION BY ID
//   const sections = window.location.pathname.split("/");
//   const id = sections[sections.length - 1];
//   console.log(id);

//   // Load all reservations and store them with setReservations
//   useEffect(() => {
//     API.getReservation(id)
//       .then((res) => {
//         setReservations(res.data);
//         console.log("reservations data: ", res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

  return <DayTimePicker timeSlotSizeMinutes={15} onConfirm={handleScheduled} />;
}

export default EditReservation;
