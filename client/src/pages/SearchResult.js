import React, { useState, useEffect } from "react";
import YardCard from "../components/YardCard";
import Button from "../components/Button";
// import yards from "../yards.json";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { logDOM } from "@testing-library/dom";

function SearchResult() {
  // Setting our component's initial state
  const [yards, setYards] = useState([{ city: "loading" }]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadYards();
  }, []);

  // Loads all books and sets them to books
  function loadYards() {
    API.getYards()
      .then((res) => {
        setYards(res.data);
        console.log("Yards data");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
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

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis,
  //     })
  //       .then((res) => loadBooks())
  //       .catch((err) => console.log(err));
  //   }
  // }
  console.log("Yards length");
  console.log(yards.length);
  console.log(yards);

  // return (
  //   <div>
  //     {yards[0].city}
  //     {yards[1].city}
  //     {yards[2].city}
  //     Yards here!
  //   </div>
  // );
  return (
    <div>
      {yards.length ? (
        <List>
          {yards.map((yard) => (
            <YardCard key={yard._id}>
              {/* <strong>
                {yard.name} by {yard.user.fname} {yard.user.lname}
              </strong> */}
              <Button
                className="more-info"
                onClick={() => window.location.replace("/yards/" + yard._id)}
              >
                More Info
              </Button>
            </YardCard>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default SearchResult;
