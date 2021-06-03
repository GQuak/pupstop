import React from 'react';
import SearchBar from "../components/SearchBar"

function Header() {
    return (
        <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">Who let the dogs out?</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;