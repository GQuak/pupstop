import React from "react";
import { Link } from "react-router-dom";

const styles = {
  img: {
    height: 75,
  },
};

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "navbar-brand" : "navbar-brand"
          }
        >
          <img
            src="https://drive.google.com/uc?export=view&id=1AoWVQugChZV9non-0YnO7qY6qyfR9EzV"
            alt="Company Logo"
            style={styles.img}
          />
        </Link>
        {props.loggedIn ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/searchresults"
                  className={
                    window.location.pathname === "/searchresults"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Find a Yard
                </Link>
              </li>
              {/* conditionally render Hey, users.fname and Login */}
              <li className="nav-item active">
                <Link
                  // ADD USER ID TO ROUTE
                  to={(location) => ({
                    ...location,
                    pathname: "/profile",
                  })}
                  className={
                    window.location.pathname === "/profile"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {/* CHANGE TO USER.FNAME */}
                  Hey, User
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/searchresults"
                  className={
                    window.location.pathname === "/searchresults"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Find a Yard
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  // ADD USER ID TO ROUTE
                  to="/profile/60c7961fcde5ef96de7933e3"
                  className={
                    window.location.pathname === "/profile/60c7961fcde5ef96de7933e3"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {/* CHANGE TO USER.FNAME */}
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className={
                    window.location.pathname === "/login"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
