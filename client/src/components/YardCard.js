import React from "react";
import MoreInfoButton from "../components/MoreInfoButton"
import SearchBar from "../components/SearchBar"


function YardCard(props) {
  return (
    <div className="container">
     {props.yards.map(yard => (
      <div className="row yard-card">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="masthead text-white">
            <a href={yard.id}>
              <div className="overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 mx-auto">
                    <h1>{yard.name}</h1>
                    <h3>Hosted by Jenn Greiner</h3>
                    <br />
                    <h4> {yard.city}, {yard.state} </h4>
                  </div>
                  <div className="col-md-10 col-lg-8 col-xl-7 mx-auto"></div>
                </div>
              
                <MoreInfoButton>More Info</MoreInfoButton>
                </div>
            </a>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
     ))}
     </div>
  );
}

export default YardCard;
