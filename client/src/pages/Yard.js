import React from "react";
import YardCard from "../components/YardCard";
import yards from "../yards.json";

function Yard(props) {
  return (
    <div>
      <YardCard yards={yards} />;
    </div>
  );
}

export default Yard;
