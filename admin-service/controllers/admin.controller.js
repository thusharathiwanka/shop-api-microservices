const Admin = require("../models/admin.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * use to login admin
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const loginAdmin = async (req, res) => {
	// request body validation
	if (req.body) {
		const { username, password } = req.body;

		// user inputs validation
		if (!username || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		let userRole;

		if (username.includes("@admin")) {
			userRole = "Admin";
		}

		// user inputs validation
		if (!username || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// checking for username existence
			const existingUser = await Admin.findOne({
				username: username,
			});

			if (!existingUser) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			// checking for password existence
			const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			// logging the user
			const token = jwt.sign({ user: existingUser._id, type: userRole }, process.env.APP_SECRET);

			// sending token
			return res.status(200).json({ token: token, role: "Admin" });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(406).send();
};

const getAdmin = async (req, res) => {
	if (req.params.id) {
		try {
			const user = await Admin.findById(req.params.id, "-password");
			res.status(200).json({ message: "Admin details received", data: user });
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	} else res.status(404).json({ message: "Client error" });
};

module.exports = { loginAdmin, getAdmin };
