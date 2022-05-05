const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		items: [{ type: Object }],
		total: { type: String },
		delivery_status: { type: String, required: true, default: "pending" },
		customer: { type: String },
		address: { type: String },
	},
	{ timestamps: true }
);

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
