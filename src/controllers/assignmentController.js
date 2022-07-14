const Assignment = require("../models/assingmentsModel");

module.exports.getAssignments = async (req, res) => {
  try {
    let assignments = await Assignment.find().lean().exec();

    res.send(assignments).status(200);
  } catch (error) {
    res.send(err.message).status(400);
  }
};

module.exports.uploadAssignments = async (req, res) => {
  try {
    let assignment = await Assignment.create(req.body);
    console.log(assignment);
    res.send(assignment).status(201);
  } catch (error) {
    res.send(err.message).status(400);
  }
};

module.exports.getOneAssign = async (req, res) => {
  try {
    let id = req.params.id;
    let assignment = await Assignment.findById(id).lean().exec();
    res.send(assignment).status(201);
  } catch (error) {
    res.send(error.message).status(400);
  }
};
