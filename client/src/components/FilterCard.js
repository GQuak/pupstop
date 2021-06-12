import React from "react";

function FilterCard(props) {
  return (
    <div className="card-container">
      <div className="row">
        {props.filters.map((filter) => (
          <div className="col-sm-12 col-md-4 filter-card">
            <a className="filter-card" href={filter.path}>
              <h3>{filter.name}</h3>
              <img
                className="thumbnails"
                src={filter.image}
                alt={filter.name}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCard;
