const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		items: [{ type: Object }],
		total: { type: Number },
		delivery_status: { type: String, required: true, default: "pending" },
		customer: {
			_id: { type: String, require: true },
			name: { type: String, required: true },
			email: { type: String, required: true },
			mobile: { type: String, required: true },
		},
		address: { type: String },
	},
	{ timestamps: true }
);

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
