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
    getWishLists: function() {
      return axios.get("/api/wishlists");
    },
    // Gets the book with the given id
    getWishList: function(id) {
      return axios.get("/api/wishlists/" + id);
    },
    // Deletes the book with the given id
    deleteWishList: function(id) {
      return axios.delete("/api/wishlists/" + id);
    },
    // Saves a book to the database
    saveWishLists: function(bookData) {
      return axios.post("/api/wishlists", bookData);
    },
  // 
  login: function(loginData){
    return axios.post("/api/users/login", loginData);
  },
  signup: function(signupData){
    return axios.post("/api/users/signup", signupData);
  }
};
