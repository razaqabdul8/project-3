const bcrypt = require("bcrypt");
  const express = require("express");
  const {User} =  require("../../models");
  const router = express.Router();
  // signup route
  // Matches with "/api/user/signup"
  router.post("/signup", async (request, response) => {
    try {
        var user = new User(request.body);
        var result = await user.save();
        result.password = "";
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

  // login route
   // Matches with "/api/user/login"
  router.post("/login", async (request, response) => {
    try {
        var user = await User.findOne({ email: request.body.email }).exec();
        if(!user) {
            return response.status(400).send({ message: "The username does not exist" });
        }
        user.comparePassword(request.body.password, (error, match) => {
            if(!match) {
                return response.status(400).send({ message: "The password is invalid" });
            }
        });
        // response.send({ message: "The username and password combination is correct!" });
        user.password = "";
        response.json(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

  module.exports = router;