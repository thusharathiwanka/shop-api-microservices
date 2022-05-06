const axios = require("axios");

const Feedback = require("../models/feedback.model");

/**
 * use to save feedback
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const saveFeedback = async (req, res) => {
	if (req.body) {
		const { topic, description, category } = req.body;
		const userId = req.body.userId;

		// user inputs validation
		if (!topic || !description || !category || !userId) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			const response = await axios.get(`http://localhost:5002/${userId}`);

			// save feedback
			const newFeedback = new Feedback({
				topic,
				description,
				category,
				givenBy: response.data.data,
			});

			console.log(newFeedback);

			await newFeedback.save();

			// sending as saved
			return res
				.status(201)
				.json({ message: "Feedback saved successfully", data: { newFeedback } });
		} catch (err) {
			console.log(err.message);
			return res.status(500).json({ message: "Something went wrong" });
		}
	}

	return res.status(400).json({ message: "Client error" });
};

/**
 * use to get feedback based on id
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getFeedback = async (req, res) => {
	if (req.params.id) {
		try {
			const feedback = await Feedback.findById(req.params.id);
			return res.status(200).json({ feedback: feedback });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}
};

/**
 * use to get total of the feedbacks
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getFeedbacksTotal = async (req, res) => {
	try {
		const feedbacks = await Feedback.find();
		return res.status(200).json({ total: feedbacks.length });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
	}
};

/**
 * use to get all feedbacks
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getFeedbacks = async (req, res) => {
	try {
		const feedbacks = await Feedback.find().populate("givenBy", "email");
		return res.status(200).json({ feedbacks: feedbacks });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
	}
};

/**
 * use to get all feedbacks of specific user
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getFeedbacksOfUser = async (req, res) => {
	try {
		const feedbacks = await Feedback.find({ "givenBy._id": req.params.id });
		return res.status(200).json({ feedbacks: feedbacks });
	} catch (err) {
		return res.status(500).send();
	}
};

/**
 * use to delete the specific feedback
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const deleteFeedback = async (req, res) => {
	if (req.params.id) {
		try {
			await Feedback.findByIdAndDelete(req.params.id);
			return res.status(200).send();
		} catch (err) {
			return res.status(500).send();
		}
	}
};

module.exports = {
	getFeedbacksTotal,
	saveFeedback,
	getFeedbacks,
	getFeedback,
	deleteFeedback,
	getFeedbacksOfUser,
};
