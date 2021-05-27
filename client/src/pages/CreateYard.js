import React from "react";

function CreateYard() {

    return(
        <div>
        <div className="container">
    <div className="row">
        <div className="col-md-4 mx-auto">
            <h1 className="mb-5">Host your yard</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 mx-auto">
            <form className="form addyard-form">
                <div className="form-group">
                    <label for="name-yard">Give your yard a name</label>
                    <input type="text" className="form-control" id="name-yard" placeholder="Yard name">
                    <label for="description-yard">Give owners a brief description about your yard</label>
                    <input type="text" className="form-control" id="description-yard" placeholder="Yard description">
                    <label for="address-yard">Address</label>
                    <input type="text" className="form-control" id="address-yard" placeholder="Street">
                    <input type="text" className="form-control" id="city-yard" placeholder="City">
                    <div className="form-group">
                        <select className="form-input" id="state-yard" name="yard-state">
                            <option value="" disabled selected>State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virgina</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <input type="text" className="form-control" id="zip-yard" placeholder="ZIP">
                    <input type="number" className="form-control" id="rate-yard" placeholder="Hourly Rate">
                    <input type="checkbox" id="fence-yard" value="1">
                    <label for="fence-yard"> My yard has a fence</label><br>
                    <input type="checkbox" id="water-yard" value="1">
                    <label for="water-yard">My yard has water available</label><br>
                    <input type="checkbox" id="pets-yard" value="1">
                    <label for="pets-yard">There will be other pets at my yard</label><br>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
    )
}

export default CreateYard;