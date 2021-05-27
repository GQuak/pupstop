import React from "react";

function ViewReservation{
    return(
        <div>
            <div class="container">
        <div class="row">
            <h3 style="margin-top: 50px">{{fname}}'s Reservations</h3>
        </div>

        <div class="row">
            <div class="col-lg-10">
                <table style="margin-top: 50px" class="table">
                    <tbody>
                        <tr>
                            <td><a href="/yard/{{yardId}}">{{datetime}}</a></td>
                            <td>
                                <button style=' font-size:24px; border-color: transparent; background-color: transparent; width: 25px; height: 25px;'> <img style=" width: 25px; height: 25px;" src="../img/edit.jpg" alt="edit button"> </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
    )
}

export default ViewReservation;