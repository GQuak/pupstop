import React, { useState } from "react";
import { render } from "react-dom";
import API from "../utils/API";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import userEvent from "@testing-library/user-event";

function MakeReservation() {
  const [dateTime, setDateTime] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDateTime({ ...dateTime, [name]: value });
  }

  const handleScheduled = (dateTime) => {
    console.log("scheduled: ", dateTime);
    console.log(dateTime);
    if (dateTime) {
      API.saveReservation({
        datetime: dateTime,
      })
        .then((res) => {
          console.log("click then ", res.data);
          // API.getUser(res.data._id);
          // window.location.replace("/reservations" + user._id);
        })
        .catch((err) => console.log(err));
    }
  };

  return <DayTimePicker timeSlotSizeMinutes={15} onConfirm={handleScheduled} />;
}

export default MakeReservation;
