import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import API from "../utils/API";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import userEvent from "@testing-library/user-event";

function MakeReservation() {
  const [dateTime, setDateTime] = useState({});
  const [yard, setYard] = useState({});

  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  useEffect(() => {
    API.getYard(id)
      .then((res) => setYard(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDateTime({ ...dateTime, [name]: value });
  }

  const handleScheduled = (dateTime) => {
    console.log(dateTime);
    if (dateTime) {
      API.saveReservation({
        datetime: dateTime,
        // user_id: req.session.id
        yard_id: id,
      })
        .then((res) => {
          window.location.replace("/reservations");
          console.log("click then ", res.data);
          // API.getUser(res.data._id);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1>Reserve {yard.name}</h1>
      <DayTimePicker timeSlotSizeMinutes={15} onConfirm={handleScheduled} />
    </div>
  );
}

export default MakeReservation;
