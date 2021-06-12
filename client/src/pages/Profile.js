import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import API from "../utils/API";

function Profile() {
  const [users, setUsers] = useState([]);

  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  useEffect(() => {
    API.getUser(id)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/reservations/" + id);
  };


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
                <p> {/* {users.yards.city}, {users.yards.state} */}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Button onClick={handleButtonClick}>Reservations</Button>
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
