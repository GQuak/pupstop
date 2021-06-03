import React from "react";

function Navbar{
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
            <img src="/img/pup-stop.png" alt="Company Logo" style="width: 40%; ">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style="white-space: nowrap; color: #5B95B3;" class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a style="color: #5B95B3;" class="nav-link" href="/profile">Profile
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a style="color: #5B95B3;" class="nav-link" href="/yard">Find a Yard</a>
                </li>
                 <li class="nav-item">
                    <a style="color: #5B95B3;" class="nav-link" href="/yard">Gabe's place</a>
                </li>
            </ul>
            <form style="white-space: nowrap;" class="form-inline my-2 my-lg-0">
                {{#if logged_in}}
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                    style="color: #5B95B3; border-color: #5B95B3; background-color: white;" id="logout">Logout</button>
                {{/if}}

                {{#unless logged_in}}
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                    style="color: #5B95B3; border-color: #5B95B3; background-color: white;" id="login">Login</button>
                {{/unless}}
            </form>
        </div>
    </nav>
    </div>
    )
}

export default Navbar;