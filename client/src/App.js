
// import Yard from "./pages/Yard";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import MakeReservation from "./pages/MakeReservation";
// import Signup from "./pages/Signup";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import { SearchProvider } from "./utils/searchContext";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div>
    <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/puppyplaydate" component={SearchResult} />
      <Route exact path="/login" component={Login} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
