const router = require("express").Router();
const bookRoutes = require("./lists");
const userRoutes = require("./user");

// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);

module.exports = router;
