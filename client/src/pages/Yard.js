import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { List, ListItem } from "../components/List";
import Review from "../components/Review";
import API from "../utils/API";

function Yard() {
  const [yards, setYards] = useState([
    {
      name: "loading name",
      city: "loading city ",
      state: "loading state",
    },
  ]);

  useEffect((id) => {
    loadYard(id);
  }, []);

  // Loads all books and sets them to books
  function loadYard(id) {
    API.getYard(id)
      .then((res) => {
        setYards(res.data);
        console.log("Yard data");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/makereservation/" + yards._id);
  };
  return (
    <div className="container">
      <div className="masthead text-white">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1>{yards.name}</h1>
              <h3>Hosted by Jenn Greiner</h3>
              <br />
              <h4>
                {" "}
                {yards.city}, {yards.state}{" "}
              </h4>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto"></div>
          </div>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-md-8">
          <List>
            <h3>Features</h3>
            {yards.water ? <ListItem>Has Water</ListItem> : <p></p>}
            {yards.fence ? <ListItem>Has Fence</ListItem> : <p></p>}
            {yards.hasPets ? <ListItem>Has Pets</ListItem> : <p></p>}
          </List>
        </div>
        <div className="col-md-4">
          <h3>{yards.rate} / hour</h3>
          <Button className="default" onClick={handleButtonClick}>
            Reserve
          </Button>
        </div>
      </div>
      <div className="row">
        <h3>Reviews</h3>
      </div>
      <Review></Review>
    </div>
  );
}

export default Yard;
