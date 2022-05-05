const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5006;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/auth.route"));

app.listen(PORT, () => {
	console.log(`auth service connected and started listening on port ${PORT}`);
});
