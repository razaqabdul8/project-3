const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: { type: String, required: true, unique:true },
      // The password cannot be null
      password:{ type: String, required: true }
  });
  userSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
userSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};
const User = mongoose.model("User", userSchema);
module.exports = User;
  