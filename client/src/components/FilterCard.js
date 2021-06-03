import React from 'react';

function FilterCard() {
    return (
        <div className="row">
          <div className="col-lg-4">
            <a href="/hasfence">
              <h3>Has High Fence</h3>
              <img
                className="thumbnails"
                src="../img/high fence.jpg"
                alt="photo of large fence"
              />
            </a>
          </div>
        </div>
    );
};

export default FilterCard;