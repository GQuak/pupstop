/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// UPDATE with specific Heroku app URL for live deployment

export default {
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUsers: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUsers: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Gets all books
  getYards: function () {
    let var1 = axios.get("/api/yards");
    console.log("axios", var1);
    return var1;
  },
  // Gets the book with the given id
  getYard: function (id) {
    return axios.get("/api/yards/" + id);
  },
  // Deletes the book with the given id
  deleteYard: function (id) {
    return axios.delete("/api/yards/" + id);
  },
  // Saves a book to the database
  saveYard: function (yardData) {
    return axios.post("/api/yards", yardData);
  },
};
