const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// const User = require("../../models/user");

// router.get("/", async (req, res) => {
//   const users = await User.find({}).select("-password");

//   res.json(users);
// });

// Matches with "/api/users"
router.route("/").get(usersController.findAll).post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .post(usersController.update)
  .delete(usersController.remove);

module.exports = router;
