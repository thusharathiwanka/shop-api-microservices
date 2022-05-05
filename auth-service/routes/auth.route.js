const router = require("express").Router();
const { checkLoggedIn } = require("../controllers/auth.controller");

router.get("/", checkLoggedIn);

module.exports = router;
