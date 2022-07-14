const mongoose = require("mongoose");

const lectureModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    lectureType: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Lectures = mongoose.model("lecture", lectureModel);

module.exports = Lectures;
