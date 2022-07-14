const {
  getAssignments,
  uploadAssignments,
  getOneAssign,
} = require("../controllers/assignmentController");

const router = require("express").Router();

router.get("", getAssignments);
router.get("/:id", getOneAssign);
router.post("/postAssignment", uploadAssignments);

module.exports = router;
