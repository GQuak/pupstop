import React from "react";
import { Link } from "react-router-dom";

const styles = {
    img: {
    height: 75,
  },
};

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className={window.location.pathname === "/"
                  ? "navbar-brand"
                  : "navbar-brand"}>
                <img src="https://drive.google.com/uc?export=view&id=1AoWVQugChZV9non-0YnO7qY6qyfR9EzV" alt="Company Logo" style={styles.img} />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link to="/profile" className={window.location.pathname === "/profile"
                   ? "nav-link active"
                  : "nav-link"}>
                    Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/yard" className={window.location.pathname === "/yard"
                   ? "nav-link active"
                  : "nav-link"}>
                        Find a Yard
                        </Link>
                    </li>
                </ul>
                <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                    {/* <form style="white-space: nowrap;" className="form-inline my-2 my-lg-0">
                        {{#if logged_in}}
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                            style="color: #5B95B3; border-color: #5B95B3; background-color: white;" id="logout">Logout</button>
                        {{/if}}

                        {{#unless logged_in}}
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                            style="color: #5B95B3; border-color: #5B95B3; background-color: white;" id="login">Login</button>
                        {{/unless}}
                    </form> */}
            </div>
        </nav>
    </div>
    )
}

export default Navbar;