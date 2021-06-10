const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/yards"
router
  .route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

// Matches with "/api/yards/:id"
router
  .route("/:id")
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);

module.exports = router;
