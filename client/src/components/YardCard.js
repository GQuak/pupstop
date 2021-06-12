import React from "react";
import Button from "../components/Button";

function YardCard({ id, name, city, state }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/yard/" + id);
  };

  return (
    <div className="container">
      <div className="row yard-card">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="masthead text-white">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h1>{name}</h1>
                  <h3>Hosted by Jenn Greiner</h3>
                  <br />
                  <h4>
                    {" "}
                    {city}, {state}{" "}
                  </h4>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto"></div>
              </div>
            </div>
            <Button className="more-info" onClick={handleButtonClick}>
              More Info
            </Button>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}

export default YardCard;
