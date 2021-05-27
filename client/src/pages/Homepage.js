import React from "react";

function Homepage() {
    return(
        <div>
        <header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
        <div className="row">
            <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Who let the dogs out?</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                    <div className="form-row">
                        <div className="col-12 col-md-9 mb-2 mb-md-0">
                            <input type="email" className="form-control form-control-lg" placeholder="Search">
                        </div>
                        <div className="col-12 col-md-3">
                            <button style="background-color: #5B95B3; border-color: #5B95B3;" type="submit"
                                className="btn btn-block btn-lg btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</header>

<!-- Stuff -->
<div className="container">
    <h3 style="margin-top: 25px; text-align: center;">Pup-ular Spots</h3>
    <div className="row">
        <div className="col-lg-4">
            <a href="/yard/1"><img className="thumbnails" src="../img/yard1.jpg" alt="EXPLAINATION"></a>
        </div>
        <div className="col-lg-4">
            <a href="/yard/2">
                <img className="thumbnails" src="../img/yard2.jpg" alt="EXPLAINATION">
            </a>
        </div>
        <div className="col-lg-4">
            <a href="/yard/3">
                <img className="thumbnails" src="../img/yard3.jpg" alt="EXPLAINATION">
            </a>
        </div>
    </div>
</div>


<!-- Filtered Results -->
<div className="container">
    <div style="margin-top: 25px;" className="row">
        <div className="col-lg-4">
            <a href="/hasfence">
                <h3 style="color: black;">Has High Fence</h3>
                <img className="thumbnails" src="../img/high fence.jpg" alt="photo of large fence">
            </a>
        </div>
        <div className="col-lg-4">
            <a href="/haswater">
                <h3 style="color: black;">Has Water Feature</h3>
                <img className="thumbnails" src="../img/water.jpg" alt="photo of child playing in water">
            </a>
        </div>
        <div className="col-lg-4">
            <a href="/haspets">
                <h3 style="color: black;">Puppy Play-Date</h3>
                <img className="thumbnails" src="../img/play date.jpg" alt="photo of two dogs playing">
            </a>
        </div>
    </div>
</div>

<!-- Testimonials -->
<div className="container">
    <h2 style="margin-top: 25px;" className="mb-5">Testimonials!...</h2>
    <div className="row">
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="../img/testimonial-1.jpg" alt="photo of person leaving testimonial">
                <p className="font-weight-light mb-0">"Pup Stop is such a convenient way for me to make some extra money
                    and meet some new furry friends"</p>
                    <p>-Nikki, Host</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="../img/testimonial-2.jpg" alt="photo of person leaving testimonial">
                <p className="font-weight-light mb-0">"Wow. Not only is this my favorite website but it was made by my
                    favorite team ever! My dog and I have never had this much fun."</p>
                    <p>-Allana</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="../img/testimonial-3.jpg" alt="photo of person leaving testimonial">
                <p className="font-weight-light mb-0">"We had so much fun I immediately booked a return trip back the
                    next day! Such a great service!"</p>
                    <p>-Esther</p>
            </div>
        </div>
    </div>
</div>

<!-- Call to Action -->
<section className="call-to-action text-white text-center">
    <div className="container">
        <div className="row">
            <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Join Our Mailing List!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                    <div className="form-row">
                        <div className="col-12 col-md-9 mb-2 mb-md-0">
                            <input type="email" className="form-control form-control-lg" placeholder="Enter your email...">
                        </div>
                        <div className="col-12 col-md-3">
                            <button style="background-color: #5B95B3; border-color: #5B95B3;" type="submit"
                                className="btn btn-block btn-lg btn-primary">Sign up!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</div>
    )
}

export default Homepage;