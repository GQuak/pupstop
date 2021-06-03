import React from "react";

function Navbar{
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <img src="/img/pup-stop.png" alt="Company Logo" style="width: 40%; ">
        </a>
        <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style="white-space: nowrap; color: #5B95B3;" className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a style="color: #5B95B3;" className="nav-link" href="/profile">Profile
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a style="color: #5B95B3;" className="nav-link" href="/yard">Find a Yard</a>
                </li>
                 <li className="nav-item">
                    <a style="color: #5B95B3;" className="nav-link" href="/yard">Gabe's place</a>
                </li>
            </ul>
            <form style="white-space: nowrap;" className="form-inline my-2 my-lg-0">
                {{#if logged_in}}
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                    style="color: #5B95B3; border-color: #5B95B3; background-color: white;" id="logout">Logout</button>
                {{/if}}

                {{#unless logged_in}}
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                    style="color: #5B95B3; border-color: #5B95B3; background-color: white;" id="login">Login</button>
                {{/unless}}
            </form>
        </div>
    </nav>
    </div>
    )
}

export default Navbar;