const router = require("express").Router();
const yardRoutes = require("./yards");
const userRoutes = require("./users");

// Book routes
router.use("/yards", yardRoutes);
router.use("/users", userRoutes);

module.exports = router;
