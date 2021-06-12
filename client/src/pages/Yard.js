import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Yard(props) {
  // const [yards, setYards] = useState([
  //   // {
  //   //   name: "loading name",
  //   //   city: "loading city ",
  //   //   state: "loading state",
  //   // },
  // ]);

  // useEffect((id) => {
  //   loadYard(id);
  // }, []);

  // // Loads all books and sets them to books
  // function loadYard(id) {
  //   API.getYard(id)
  //     .then((res) => {
  //       setYards(res.data);
  //       console.log("Yard data");
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }
  const [yard, setYard] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const { id } = useParams();
  const sections = window.location.pathname.split("/");
  const id = sections[sections.length - 1];
  useEffect(() => {
    API.getYard(id)
      .then((res) => setYard(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    window.location.replace("/makereservation/" + yard._id);
  };
  return (
    <div className="container">
      <div className="masthead text-white">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1>{yard.name}</h1>
              <h3>Hosted by Jenn Greiner</h3>
              <br />
              <h4>
                {" "}
                {yard.city}, {yard.state}{" "}
              </h4>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto"></div>
          </div>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-md-8">
          <List>
            <h3>Features</h3>
            {yard.water ? <ListItem>Has Water</ListItem> : <p></p>}
            {yard.fence ? <ListItem>Has Fence</ListItem> : <p></p>}
            {yard.hasPets ? <ListItem>Has Pets</ListItem> : <p></p>}
          </List>
        </div>
        <div className="col-md-4">
          <h3>{yard.rate} / hour</h3>
          <Button className="default" onClick={handleButtonClick}>
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Yard;
