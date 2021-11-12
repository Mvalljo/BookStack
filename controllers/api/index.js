const router = require("express").Router();
const userRoutes = require("./userRoutes");
const nytListRoutes = require("./nytListRoutes");

router.use("/users", userRoutes);
router.use("/nytList", nytListRoutes);

module.exports = router;
