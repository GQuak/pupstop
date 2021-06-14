import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddYard from "./pages/AddYard";
import Profile from "./pages/Profile";
import MakeReservation from "./pages/MakeReservation";
import Yard from "./pages/Yard";
import EditYard from "./pages/EditYard";
import EditProfile from "./pages/EditProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewReservation from "./pages/ViewReservation";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    // initial value
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("loggedIn="))
  );
  return (
    <Router>
      <div>
        <Navbar {...{ loggedIn }} />
        <Route exact path="/" component={Homepage} />
        <Route path="/searchresults" component={SearchResult} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/addyard" component={AddYard} />
        <Route path="/makereservation" component={MakeReservation} />
        <Route path="/profile" component={Profile} />
        <Route path="/yard" component={Yard} />
        <Route path="/reservations" component={ViewReservation} />
        <Route path="/edit/yard" component={EditYard} />
        <Route path="/edit/profile" component={EditProfile} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
