const router = require("express").Router();
const {
	getFeedbacksTotal,
	getFeedbacks,
	getFeedback,
	deleteFeedback,
	saveFeedback,
	getFeedbacksOfUser,
} = require("../controllers/feedback.controller");

router.get("/", getFeedbacks);
router.post("/", saveFeedback);
router.get("/user/:id", getFeedbacksOfUser);
router.get("/total", getFeedbacksTotal);
router.get("/:id", getFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;
