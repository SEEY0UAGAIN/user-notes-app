const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/User");
const ensureAuth = require("../middleware/authMiddleware");
const Note = require("../models/Note");

router.get("/", ensureAuth, async (req, res) => {
  // แทนที่จะ redirect ให้ render หน้า dashboard แทน
  const notes = await Note.find({ user: req.session.userId }).sort({
    createdAt: -1,
  });
  res.render("dashboard", { notes, user: req.session.userId });
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    await User.create({ username, password: hashed });
    res.redirect("/login");
  } catch {
    res.send("Username already exists!");
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user._id;
    res.redirect("/");
  } else {
    res.send("Login failed");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
