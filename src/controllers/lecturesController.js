const Lectures = require("../models/lecturesModel");

module.exports.getLectures = async (req, res) => {
  try {
    let lectures = await Lectures.find().lean().exec();

    res.send(lectures).status(200);
  } catch (error) {
    res.send(err.message).status(400);
  }
};

module.exports.uploadLectures = async (req, res) => {
  try {
    let lecture = await Lectures.create(req.body);
    res.send(lecture).status(201);
  } catch (error) {
    res.send(err.message).status(400);
  }
};
