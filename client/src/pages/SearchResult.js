import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import SearchResultCard from "../components/SearchResultCard";
import yards from "../yards.json";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";



function SearchResult() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all books and store them with setBooks
    useEffect(() => {
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      API.getBooks()
        .then(res => 
          setBooks(res.data)
        )
        .catch(err => console.log(err));
    };
  
    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
      API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
        API.saveBook({
          title: formObject.title,
          author: formObject.author,
          synopsis: formObject.synopsis
        })
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }
    };
  
    return(
        <SearchResultCard yards={yards} />
        {yards.length ? (
            <List>
              {yards.map(yard => (
                <ListItem key={yard._id}>
                  <Link to={"/yards/" + yard._id}>
                    <strong>
                      {yard.name} by {yard.user.fname} {yard.user.lname}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteYard(yard._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )};
    );
    }

export default SearchResult;

