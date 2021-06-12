/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// UPDATE with specific Heroku app URL for live deployment

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUsers: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Update a user to the database
  updateUsers: function (id) {
    return axios.put("/api/users" + id);
  },
  // Saves a user to the database
  saveUsers: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Gets all Yards
  getYards: function () {
    let var1 = axios.get("/api/yards");
    console.log("axios", var1);
    return var1;
  },
  // Gets the yard with the given id
  getYard: function (id) {
    return axios.get("/api/yards/" + id);
  },
  // Deletes the yard with the given id
  deleteYard: function (id) {
    return axios.delete("/api/yards/" + id);
  },
  // Saves a yard to the database
  saveYard: function (yardData) {
    return axios.post("/api/yards", yardData);
  },

  // Gets all Comments
  getComments: function () {
    let var1 = axios.get("/api/comments");
    console.log("axios", var1);
    return var1;
  },
  // Gets the yard with the given id
  getComment: function (id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the yard with the given id
  deleteComment: function (id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a yard to the database
  saveComment: function (commentData) {
    return axios.post("/api/comments", commentData);
  },

  // Gets all Reservations
  getReservations: function () {
    let var1 = axios.get("/api/reservations");
    console.log("axios", var1);
    return var1;
  },
  // Gets the yard with the given id
  getReservation: function (id) {
    return axios.get("/api/reservations/" + id);
  },
  // Deletes the yard with the given id
  deleteReservation: function (id) {
    return axios.delete("/api/reservations/" + id);
  },
  // Saves a yard to the database
  saveReservation: function (reservationData) {
    return axios.post("/api/reservations", reservationData);
  },
};
