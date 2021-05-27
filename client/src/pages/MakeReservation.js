import React from "react";

function MakeReservation{
    return (
 <div id="showcase-wrapper">
        <div id="myCalendarWrapper"></div>
        <div id="example">
            <h3>currentValue:
                <p id="current-date"></p>
            </h3>
            <h3>currentValue.getDay():
                <p id="current-day"></p>
            </h3>
            <h3>currentValue.toDateSring():
                <p id="current-datestring"></p>
            </h3>
        </div>
    </div>
    )
}

export default MakeReservation;