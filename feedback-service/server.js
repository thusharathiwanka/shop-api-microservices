const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
	.connect(process.env.MONGO_CONNECTION_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`feedback service connected to mongodb and started listening on port ${PORT}`);
		});
	})
	.catch(err => {
		console.error(err.message);
	});

app.use("/admin-auth", require("./routes/feedback.admin.auth.route"));
app.use("/user-auth", require("./routes/feedback.user.auth.route"));
