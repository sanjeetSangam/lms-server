const {
  getLectures,
  uploadLectures,
} = require("../controllers/lecturesController");

const router = require("express").Router();

router.get("/lectures", getLectures);
router.post("/postlectures", uploadLectures);

module.exports = router;
