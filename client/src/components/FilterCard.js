import React from "react";

function FilterCard(props) {
  return (
    <div className="card-container">
      {props.filters.map((filter) => (
        <div className="row">
          <div className="col-12 filter-card">
            <a className="filter-card" href={filter.path}>
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="thumbnails"
                    src={filter.image}
                    alt={filter.name}
                  />
                </div>
                <div className="col-lg-8">
                  <h3>{filter.name}</h3>
                  <p>{filter.body}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilterCard;
