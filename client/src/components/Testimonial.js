import React from 'react';
import testimonials from "../testimonials.json"

function Testimonial(props) {
    return (
        <div className="container">
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

    //   <section className="call-to-action text-white text-center">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-9 mx-auto">
    //           <h2 className="mb-4">Join Our Mailing List!</h2>
    //         </div>
    //         <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
    //           <form>
    //             <div className="form-row">
    //               <div className="col-12 col-md-9 mb-2 mb-md-0">
    //                 <input
    //                   type="email"
    //                   className="form-control form-control-lg"
    //                   placeholder="Enter your email..."
    //                 />
    //               </div>
    //               <div className="col-12 col-md-3">
    //                 <button
    //                   type="submit"
    //                   className="btn btn-block btn-lg btn-primary"
    //                 >
    //                   Sign up!
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    )
}

export default Testimonial