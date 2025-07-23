const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  content: String,
  createdAt: { type: Date, Default: Date.now },
  done: { type: Boolean, default: false },
});

module.exports = mongoose.model("note", noteSchema);
