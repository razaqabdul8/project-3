const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Number, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const WishList = mongoose.model("WishList", wishlistSchema);

module.exports = WishList;
