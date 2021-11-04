const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("helloWorld", { text: "Hello World!" });
});

module.exports = router;
