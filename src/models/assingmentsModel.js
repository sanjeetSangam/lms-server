const mongoose = require("mongoose");

const assignmentModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    assignmentType: { type: String, required: true },
    problemType: { type: String, required: true },
    assignmentProblems: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Assignment = mongoose.model("assignment", assignmentModel);

module.exports = Assignment;
