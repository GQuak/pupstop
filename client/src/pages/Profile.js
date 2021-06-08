import React from "react";
import { Link } from "react-router-dom";
import users from "../users.json";

function Profile() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <img
                src="https://drive.google.com/uc?export=view&1tYVs1rQcjF_uOK9voDu18aye8Acwfus-"
                alt="Jenn Greiner"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h1>Jenn Greiner</h1>
                <p> Denver, CO</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link
                          to="/reviews"
                          className={
                            window.location.pathname === "/reviews"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Reviews
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/profile/edit/:id"
                          className={
                            window.location.pathname === "/profile/edit/:id"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Edit Profile
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/reservations"
                          className={
                            window.location.pathname === "/reservations"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Reservations
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/yards"
                          className={
                            window.location.pathname === "/yards"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Yards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <hr size="10" width="100%" color="black" />
            <div className="row">
              <div className="col-md-12">
                <p>2 Reviews</p>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-12">
                  <p>04/10/2021</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>Jenn Greiner</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <img
                      src="../img/profile1.png"
                      alt="picture of person leaving review"
                    />{" "}
                    Justin was the best host ever! His backyard was very well
                    maintained and his dog was a gem!
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-12">
                  <p>04/09/2021</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>Gabe Quakkelaar</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <img
                      src="../img/profile3.png"
                      alt="picture of person leaving review"
                    />{" "}
                    Justin is a lousy coder, but a wonderful backyard host. My
                    dog loved Justin's backyard and we will definitely be coming
                    back.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
