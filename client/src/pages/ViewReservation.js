import React from "react";
import Button from "../components/Button";

function ViewReservation({ fname, datetime }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/edit/");
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <h3>{fname}'s Reservations</h3>
        </div>

        <div class="row">
          <div class="col-lg-10">
            <table class="table">
              <tbody>
                <tr>
                  <td>
                    <a href="/yard/{{yardId}}">{datetime}</a>
                  </td>
                  <td>
                    <Button className="default" onClick={handleButtonClick}>
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReservation;
