const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
		date: { type: String, require: true, trim: true },
		amount: { type: Number, require: true, trim: true },
	},
	{ timestamps: true }
);

const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;
