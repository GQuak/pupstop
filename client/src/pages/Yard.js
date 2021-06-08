// import { Button } from "bootstrap";
import React from "react";
import Button from "../components/Button";
import yards from "../yards.json";

function Yard(props) {
  return (
    <div className="container">
      <div className="masthead text-white">
        <a href={props.id}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1>{props.name}</h1>
                <h3>Hosted by Jenn Greiner</h3>
                <br />
                <h4>
                  {" "}
                  {props.city}, {props.state}{" "}
                </h4>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto"></div>
            </div>
          </div>
        </a>
      </div>{" "}
      <div className="row">
        <div className="col-md-8">
          <h3>Features</h3>
          <ul>
            <li>Has Water</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>$10 / hour</h3>
          <Button className="default">Reserve</Button>
        </div>
      </div>
      <div className="row">
        <h3>Reviews</h3>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>04/10/2021</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>Jenn Greiner</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>
            <img
              src="../img/profile1.png"
              alt="picture of person leaving review"
            />{" "}
            Justin was the best host ever! His backyard was very well maintained
            and his dog was a gem!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Yard;
