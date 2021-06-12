import React from "react";
import Header from "../components/Header";
import YardCard from "../components/YardCard";
import FilterCard from "../components/FilterCard";
import Testimonial from "../components/Testimonial";
import testimonials from "../testimonials.json";
import filters from "../filters.json";

function Homepage() {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <FilterCard filters={filters} />
    </div>
    <Testimonial testimonials={testimonials}/>
    </div>
  )
}

export default Homepage;
