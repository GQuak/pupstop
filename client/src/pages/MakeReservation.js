import React from "react";
import { render } from "react-dom";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";

function MakeReservation() {
  const handleScheduled = (dateTime) => {
    console.log("scheduled: ", dateTime);
    window.alert("Appointment Scheduled: ", dateTime);
  };

  return <DayTimePicker timeSlotSizeMinutes={15} onConfirm={handleScheduled} />;
}

export default MakeReservation;
