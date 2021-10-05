var express = require("express");
var router = express.Router();
const authController = require("../../../controllers/ssac/auth/authController");

router.get("/", authController.readAllMember);
router.post("/signup", authController.signUpMember);
router.post("/login", authController.signInMember);

module.exports = router;
