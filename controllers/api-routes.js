// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup", {});
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login", {});
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    db.User.findAll({
      where: {
        id: req.user.id
      },
      include: db.Event
    }).then(dbEventList => {
      res.render("user", {
        userInfo: {
          id: dbEventList[0].dataValues.id,
          email: dbEventList[0].dataValues.email
        },
        data: dbEventList[0].dataValues.Events
      });
    });
  });

  app.get("/events", (req, res) => {
    db.Event.findAll({
      include: [
        {
          model: db.User
        }
      ],
      where: {
        [Op.not]: [Sequelize.literal("COALESCE(UserId, 0) = " + req.user.id)]
      }
    }).then(dbEventList => {
      res.render("events", {
        userInfo: {
          email: req.user.email,
          id: req.user.id
        },
        events: dbEventList
      });
    });
  });

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      fname: req.body.fname,
      lname: req.body.lname,
      bio: req.body.bio
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        console.log("error here", err);
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  // THIS IS FOR CREATE EVENT & SEE MORE EVENTS

  app.post("/api/create-event", (req, res) => {
    db.Event.create({
      name: req.body.eventName,
      description: req.body.eventDescription,
      state: req.body.eventState,
      city: req.body.eventCity,
      street: req.body.eventLocation,
      date: req.body.eventDate,
      stime: req.body.eventStartTime,
      etime: req.body.eventEndTime,
      link: req.body.link
    })
      .then(() => {
        res.redirect("/events");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/join-event/:eventId", (req, res) => {
    db.Userevent.create({
      UserId: req.user.id,
      EventId: req.params.eventId
    })
      .then(() => {
        res.end();
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.delete("/api/unjoin-event/:eventId", (req, res) => {
    db.Userevent.destroy({
      where: {
        UserId: req.user.id,
        EventId: req.params.eventId
      }
    })
      .then(() => {
        res.end();
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea

      db.User.findAll({
        where: {
          id: req.user.id
        },
        include: db.Event
      }).then(dbEventList => {
        res.json(dbEventList);
      });
    }
  });
};
