import axios from "axios";

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
};
