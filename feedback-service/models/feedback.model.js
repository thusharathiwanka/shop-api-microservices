const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
	{
		topic: { type: String, require: true, trim: true },
		description: { type: String, require: true, trim: true },
		category: { type: String, require: true, trim: true },
		givenBy: {
			_id: { type: String, require: true },
			name: { type: String, required: true },
			email: { type: String, required: true },
			mobile: { type: String, required: true },
		},
	},
	{ timestamps: true }
);

const Feedback = mongoose.model("feedbacks", FeedbackSchema);

module.exports = Feedback;
