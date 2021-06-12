import React, { useState, useEffect } from "react";
import YardCard from "../components/YardCard";
import Button from "../components/Button";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { logDOM } from "@testing-library/dom";

function SearchResult() {
  // Setting our component's initial state
  const [yards, setYards] = useState([
    {
      name: "loading name",
      city: "loading city ",
      state: "loading state",
    },
  ]);
  const [formObject, setFormObject] = useState({});

  // Load all yards and store them with setYards
  useEffect(() => {
    loadYards();
  }, []);

  // Loads all yards and sets them to yards
  function loadYards() {
    API.getYards()
      .then((res) => {
        setYards(res.data);
        console.log("Yards data");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Deletes a yard from the database with a given id, then reloads yards from the db
  function deleteYard(id) {
    API.deleteYard(id)
      .then((res) => loadYards())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <div>
    {/* ADD FILTERS */}
      {yards.length ? (
        <div>
          {yards.map((yard) => (
            <YardCard
              key={yard._id}
              id={yard._id}
              name={yard.name}
              city={yard.city}
              state={yard.state}
            >
            </YardCard>
          ))}
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default SearchResult;
