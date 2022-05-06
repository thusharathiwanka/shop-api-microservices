const axios = require("axios");

const order = require("../models/order.model");

const addOrder = async (req, res) => {
	try {
		const userId = req.body.userId;
		const response = await axios.get(`http://localhost:5002/${userId}`);
		const newOrder = new order(req.body);
		newOrder.customer = response.data.data;
		await newOrder.save();
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(400);
		console.log(error);
	}
};

const getAllOrders = async (req, res) => {
	try {
		const orders = await order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getOrders = async (req, res) => {
	try {
		const userId = req.body.userId;
		const orders = await order.find({ "customer._id": userId });

		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getByIdOrder = async (req, res) => {
	try {
		const Order = await order.findById(req.params.id);
		res.status(200).json(Order);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const deleteOrderbyID = async (req, res) => {
	if (req.params) {
		try {
			const deleteOrder = await order.findByIdAndDelete(req.params.id);
			if (!deleteOrder) res.status(404).send("No item found");

			res.status(200).send();
		} catch (error) {
			response.status(500).send(error);
		}
	}
};

module.exports = {
	addOrder,
	getAllOrders,
	getByIdOrder,
	getOrders,
	deleteOrderbyID,
};
