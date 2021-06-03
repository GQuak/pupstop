import React from 'react';

function Testimonial(props) {
    return (
        <div className="container">
        <br />
            <h2 className="mb-5">Testimonials!...</h2>
            <div className="row">
                {props.testimonials.map(testimonial => (
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img
                            className="img-fluid rounded-circle mb-3"
                            src={testimonial.image}
                            alt={testimonial.name}
                        />
                        <p className="font-weight-light mb-0">
                            {testimonial.body}
                        </p>
                        <p>-{testimonial.name}, {testimonial.type}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial