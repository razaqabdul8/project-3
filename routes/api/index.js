const router = require("express").Router();
const listRoutes = require("./lists");
const wishlistRoutes = require("./wishlists");
const userRoutes = require("./user");

// Book routes
router.use("/lists", listRoutes);
router.use("/users", userRoutes);
router.use("/wishlits", wishlistRoutes);

module.exports = router;
