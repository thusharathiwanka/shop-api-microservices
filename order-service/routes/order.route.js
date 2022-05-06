const router = require("express").Router();

const {
	addOrder,
	getAllOrders,
	getOrders,
	deleteOrderbyID,
	getByIdOrder,
} = require("../controllers/order.controller");

router.post("/", addOrder);
router.get("/", getAllOrders);
router.post("/user", getOrders);
router.get("/:id", getByIdOrder);
router.delete("/:id", deleteOrderbyID);

module.exports = router;
