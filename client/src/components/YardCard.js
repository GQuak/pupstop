import React from 'react'


function YardCard(props) {
    return (
    <div className="row">
        {props.yards.map(yard => (
        <div className="col-lg-4">
            <a href={yard.id}>
              <img
                className="thumbnails"
                src={yard.image}
                alt={yard.name}
              />
            </a>
        </div>
    ))}
    </div>
    )
}

export default YardCard;