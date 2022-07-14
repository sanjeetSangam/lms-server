const {
  getLectures,
  uploadLectures,
} = require("../controllers/lecturesController");

const router = require("express").Router();

router.get("", getLectures);
router.post("/postlectures", uploadLectures);

module.exports = router;
