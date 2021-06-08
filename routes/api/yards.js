const router = require("express").Router();
const yardsController = require("../../controllers/yardsController");

// Matches with "/api/yards"
router.route("/").get(yardsController.findAll).post(yardsController.create);

// Matches with "/api/yards/:id"
router
  .route("/:id")
  .get(yardsController.findById)
  .put(yardsController.update)
  .delete(yardsController.remove);

module.exports = router;
