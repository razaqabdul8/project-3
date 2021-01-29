const router = require("express").Router();
const wishlistsController = require("../../controllers/wishlistsController");

// Matches with "/api/wishlists"
router.route("/")
  .get(wishlistsController.findAll)
  .post(wishlistsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wishlistsController.findById)
  .put(wishlistsController.update)
  .delete(wishlistsController.remove);

module.exports = router;
