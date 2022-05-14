const router = require("express").Router();
const { checkLoggedIn } = require("../controllers/auth.controller");

router.post("/", checkLoggedIn);

module.exports = router;
