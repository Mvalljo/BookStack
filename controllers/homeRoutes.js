const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/home");
    return;
  }

  res.render("login");
});

router.get("/home", (req, res) => {
  res.render("home", { logged_in: true });
});

router.get("/mystacks", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render("myStacks", { logged_in: true });
    return;
  }
  res.redirect("/");
});

router.get("/myStacks/newBook", (req, res) => {
  res.render("newBook", { logged_in: true });
});

router.get("/browse", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render("browse", { logged_in: true });
    return;
  }
  res.redirect("/");
});

router.get("/search", (req, res) => {
  res.render("search", { logged_in: true });
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/home");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/home");
    return;
  }

  res.render("signup");
});

module.exports = router;