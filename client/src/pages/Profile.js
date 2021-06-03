import React from "react";

function Profile() {
    return(
        <div><div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="row">
                <img style="height: 250px; width: 250px; margin-left: 50px; margin-top: 50px;"
                    src="../img/profile{{id}}.png" alt="picture of host" />
            </div>
        </div>
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-12">
                    <p style="font-size: xx-large; margin-top: 50px; margin-bottom: 0; font-weight: bolder;">{{fname}}
                        {{lname}}</p>
                    <p style="font-weight: bold;"> {{yard.city}} {{yard.state}}</p>
                    <p>{{yard.name}}</p>
                    <p> {{yard.description}} </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><a style="color: #5B95B3;" href="/schedule/:id">Upcoming Guests</a></li>
                        <li><a style="color: #5B95B3;" href="/addyard">Register a Yard</a></li>
                        <li><a style="color: #5B95B3;" href="/myreservations">My Reservations</a></li>
                    </ul>
                </div>
            </div>

            <hr size="10" width="100%" color="black">

{{#if}}
            <div className="row">
                <div className="col-md-12">
                    <p style="margin-top: 15px; font-size: x-large; font-weight: bolder;">2 Reviews</p>
                </div>
            </div>
            <div style="border-style: solid; border-color: black; border-width: 2px;">
                <div className="row">
                    <div className="col-md-12">
                        <p style="margin-bottom: 0;font-weight: bold;">04/10/2021</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p style="font-weight: bold;">Jenn Greiner</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p><img style="float: left; width: 100px; height: 100px; margin-right: 10px;"
                                src="../img/profile1.png" alt="picture of person leaving review"> Justin was the best host ever! His backyard was very well
                            maintained and his dog was a gem!</p>
                    </div>
                </div>
            </div>
            <div style="border-style: solid; border-color: black; border-width: 2px;">
                <div className="row">
                    <div className="col-md-12">
                        <p style="margin-bottom: 0; font-weight: bold;">04/09/2021</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p style="font-weight: bold;">Gabe Quakkelaar</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p><img style="float: left; width: 100px; height: 100px; margin-right: 10px;"
                                src="../img/profile3.png" alt="picture of person leaving review"> Justin is a lousy coder, but a wonderful backyard host. My
                            dog
                            loved Justin's backyard and we will definitely be coming back. </p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div></div>
    )
}

export default Profile;