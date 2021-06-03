import React from 'react';

const styles = {
    searchRes: {
        padding: 10,
    }
}
function SearchResultCard(props) {
    return (
        <div className="container">
            {props.yards.map(yard => (
            <div className="row mb-4 yard">
                <div className="col-md-6">
                    <h2>
                        <a href={yard.id}>{yard.name}</a>
                    </h2>
                    <p>{yard.description}</p>
                    <h4>Yard Features: </h4>
                    {/* TODO if statement for features */}
                    <ul>
                        <li>Water Available</li>
                        <li>Fenced in Yard</li>
                        <li>Pets Live Here</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3 style={styles.searchRes}>Jenn Greiner's Yard</h3>
                    <ul style={styles.searchRes}>
                        <li>{yard.address}</li>
                        <li>{yard.city}</li>
                        <li>{yard.state}</li>
                        <li>{yard.zip}</li>
                    </ul>
                </div>
            </div>
            ))}
        </div>
    )
}

export default SearchResultCard;