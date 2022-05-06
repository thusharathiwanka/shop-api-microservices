const router = require("express").Router();

const { addPayment, getAllPayment, getPaymentTotal } = require("../controllers/payment.controller");

router.post("/", addPayment);
router.get("/", getAllPayment);
router.get("/total", getPaymentTotal);

module.exports = router;
