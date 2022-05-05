const router = require("express").Router();
const { saveFeedback } = require("../controllers/feedback.controller");

router.post("/", saveFeedback);

module.exports = router;
