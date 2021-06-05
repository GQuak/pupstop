import React from 'react';

function FilterCard(props) {
    return (
        <div className="card-container">

        <div className="row">
        {props.filters.map(filter => (
          <div className="col-lg-4 card">
            <a href={filter.path}>
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
};

export default FilterCard;