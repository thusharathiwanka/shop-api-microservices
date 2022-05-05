const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
	{
		topic: { type: String, require: true, trim: true },
		description: { type: String, require: true, trim: true },
		category: { type: String, require: true, trim: true },
		givenBy: { type: String, require: true },
	},
	{ timestamps: true }
);

const Feedback = mongoose.model("feedbacks", FeedbackSchema);

module.exports = Feedback;
