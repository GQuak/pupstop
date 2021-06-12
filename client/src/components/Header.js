import React from "react";
import Button from "../components/Button";

function Header() {
  const handlebuttonclick = (e) => {
    e.preventDefault();
    window.location.replace("/searchresults");
  };

  const handleBack = (e) => {};
  return (
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5 header">Who let the dogs out?</h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <Button className="default" onClick={handlebuttonclick}>
              Find a yard
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
