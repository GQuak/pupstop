import React from "react";
import Header from "../components/Header";
import YardCard from "../components/YardCard";
import FilterCard from "../components/FilterCard";
import Testimonial from "../components/Testimonial";
import yards from "../yards.json";
import testimonials from "../testimonials.json";

function Homepage() {
  return (
    <div>
      <Header />
      <div className="container">
        <h3>Pup-ular Spots</h3>
          <YardCard yards={yards} />
      </div>
      <div className="container">
        <FilterCard />
    </div>
    <Testimonial testimonials={testimonials}/>
    </div> //closing div, dont touch
  )
}

export default Homepage;
