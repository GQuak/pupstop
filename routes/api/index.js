const router = require("express").Router();
const yardRoutes = require("./yards");
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");

router.use("/yards", yardRoutes);
router.use("/users", userRoutes);
router.use("/reservations", appointmentRoutes);

module.exports = router;
