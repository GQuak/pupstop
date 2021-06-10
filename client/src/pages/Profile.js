import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import API from "../utils/API";

function Profile() {
  const [users, setUsers] = useState([]);

  useEffect((id) => {
    loadUser(id);
  }, []);

  // Loads all books and sets them to books
  function loadUser(id) {
    API.getUser(id)
      .then((res) => {
        setUsers(res.data);
        console.log("User data");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <img src={users.image} alt={users.fname} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  {users.fname} {users.lname}
                </h1>
                <p>
                  {" "}
                  {users.yards.city}, {users.yards.state}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto">
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
                          to="/profile/edit/"
                          className={
                            window.location.pathname ===
                            "/profile/edit/" + users._id
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
                            window.location.pathname ===
                            "/reservations" + users._id
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
                            window.location.pathname === "/yard" + users._id
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
                <p>{users.yards.comments.length} Reviews</p>
              </div>
            </div>
            <Review></Review>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
