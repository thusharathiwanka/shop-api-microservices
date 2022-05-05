const router = require("express").Router();
const {
	getFeedbacksTotal,
	getFeedbacks,
	getFeedback,
	deleteFeedback,
} = require("../controllers/feedback.controller");

router.get("/", getFeedbacks);
router.get("/total", getFeedbacksTotal);
router.get("/:id", getFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;
