import React from "react";
import Button from "../components/Button"
import SearchBar from "../components/SearchBar"


function YardCard(props) {
  return (
    <div className="row">
    <SearchBar />
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <div className="masthead text-white">
          <a href={props.id}>
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h1>Sleepy Hollow</h1>
                  <h3>Hosted by Jenn Greiner</h3>
                  <br />
                  <h4> Denver, CO </h4>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto"></div>
              </div>
              
              <Button>More Info</Button>
              </div>
          </a>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default YardCard;
