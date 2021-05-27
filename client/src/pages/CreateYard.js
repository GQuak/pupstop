import React from "react";

function CreateYard() {

    return(
        <div>
        <div className="container">
        <div className="row">
            <div className="col-md-4 mx-auto">
                <h1 className="mb-5">Register as a User</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mx-auto">
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput">First and Last Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First and Last Name">
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Address</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Street">
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="City">
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="State">
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="ZIP">
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    )
}

export default CreateYard;