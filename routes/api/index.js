const router = require("express").Router();
const listRoutes = require("./lists");
const userRoutes = require("./user");

// Book routes
router.use("/lists", listRoutes);
router.use("/users", userRoutes);

module.exports = router;
