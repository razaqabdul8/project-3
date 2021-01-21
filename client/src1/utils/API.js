import axios from "axios";

export default {
  // Gets all books
  getLists: function() {
    return axios.get("/api/lists");
  },
  // Gets the book with the given id
  getList: function(id) {
    return axios.get("/api/lists/" + id);
  },
  // Deletes the book with the given id
  deleteList: function(id) {
    return axios.delete("/api/lists/" + id);
  },
  // Saves a book to the database
  saveList: function(bookData) {
    return axios.post("/api/lists", bookData);
  },
  login: function(loginData){
    return axios.post("/api/user/login", loginData);
  },
  signup: function(signupData){
    return axios.post("/api/user/signup", signupData);
  }
};
