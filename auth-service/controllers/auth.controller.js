const jwt = require("jsonwebtoken");

/**
 * use to check if the users are logged in or not
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const checkLoggedIn = (req, res) => {
	if (req.body?.token) {
		try {
			const token = req.body.token;

			if (!token) return res.json({ state: false, role: "" });

			const verify = jwt.verify(token, process.env.APP_SECRET);

			if (!verify) return res.json({ state: false, role: "" });

			return res.json({ state: true, role: verify.type });
		} catch (err) {
			console.error(err.message);
			return res.json({ state: false, role: "" });
		}
	} else return res.json({ state: false, role: "" });
};

module.exports = { checkLoggedIn };
