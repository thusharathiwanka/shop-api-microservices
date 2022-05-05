const router = require("express").Router();
const { loginAdmin, getAdmin } = require("../controllers/admin.controller");

router.get("/:id", getAdmin);
router.post("/login", loginAdmin);

module.exports = router;
