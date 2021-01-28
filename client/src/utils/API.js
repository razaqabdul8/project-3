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
  // wish list routes    
    getWshLists: function() {
      return axios.get("/api/wishlits");
    },
    // Gets the book with the given id
    getWishLists: function(id) {
      return axios.get("/api/wishlits/" + id);
    },
    // Deletes the book with the given id
    deleteWshLists: function(id) {
      return axios.delete("/api/wishlits/" + id);
    },
    // Saves a book to the database
    saveWshLists: function(bookData) {
      return axios.post("/api/wishlits", bookData);
    },
  // 
  login: function(loginData){
    return axios.post("/api/users/login", loginData);
  },
  signup: function(signupData){
    return axios.post("/api/users/signup", signupData);
  }
};
