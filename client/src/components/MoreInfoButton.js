import React from 'react';

function MoreInfoButton(props) {
    return (
        <button className="more-info-btn">{props.children}</button>
    )
}

export default MoreInfoButton;