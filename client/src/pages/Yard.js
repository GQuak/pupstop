import React from "react";

function Yard() {
  return (
    <div>
      <div className="row mb-4 yard">
        <div className="col-md-5">
          <h2>
            <a href="/yard/{{id}}">Jenn</a>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            id="yardpic"
            className="thumbnails"
            src="/img/yard{{id}}.jpg"
            alt="picture of a users yard"
          />
          <p>Owned by Jenn Greiner</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <p>
            <span> Address: </span> address
            <span> City: </span> city
            <span> State: </span> state
            <span> ZIP: </span> zip
          </p>
        </div>
      </div>
    </div>
  );
}

export default Yard;
