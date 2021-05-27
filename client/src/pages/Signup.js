import React from "react";

function Signup{ 
    return(
        <div class="row">
    <div class="col-md-6">
        <h2>Signup</h2>

        <form class="form signup-form">
            <div class="form-group">
                <label for="fname-signup">First Name:</label>
                <input class="form-input" type="text" id="fname-signup" />
            </div>
            <div class="form-group">
                <label for="lname-signup">Last Name:</label>
                <input class="form-input" type="text" id="lname-signup" />
            </div>
            <div class="form-group">
                <label for="email-signup">email:</label>
                <input class="form-input" type="text" id="email-signup" />
            </div>
            <div class="form-group">
                <label for="password-signup">password:</label>
                <input class="form-input" type="password" id="password-signup" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">signup</button>
            </div>
        </form>
    </div>
</div>
    )
}