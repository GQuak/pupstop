import userEvent from "@testing-library/user-event";
import React from "react";

function Review({fname, date, body, image}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>
            <strong>{fname}</strong>
          </p>
        </div>
        <div className="col-md-6">
          <p style={{ textAlign: "right" }}>{date}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>
            <img src={image} alt={fname} /> {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
