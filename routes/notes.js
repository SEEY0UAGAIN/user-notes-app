const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const ensureAuth = require("../middleware/authMiddleware");

router.post("/add", ensureAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    await Note.create({ user: req.session.userId, title, content });
    req.session.successMsg = "Note added successfully!";
  } catch {
    req.session.errorMsg = "Failed to add note.";
  }
  res.redirect("/");
});

router.post("/delete/:id", ensureAuth, async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id, user: req.session.userId });
    req.session.successMsg = "Note deleted successfully!";
  } catch {
    req.session.errorMsg = "Failed to delete note.";
  }
  res.redirect("/");
});

router.post("/edit/:id", ensureAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    await Note.updateOne(
      { _id: req.params.id, user: req.session.userId },
      { title, content }
    );
    req.session.successMsg = "Note updated successfully!";
  } catch {
    req.session.errorMsg = "Failed to update note.";
  }
  res.redirect("/");
});

router.post("/done/:id", ensureAuth, async (req, res) => {
  try {
    await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.session.userId },
      { done: true }
    );
    req.session.successMsg = "Marked as done!";
  } catch {
    req.session.errorMsg = "Failed to mark note as done.";
  }
  res.redirect("/");
});

module.exports = router;
