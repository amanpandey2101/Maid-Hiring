const express = require("express");
const router = express.Router();
const User = require("../../models/user");

const { signin, signup, getClientDetails } = require("../../controller/user/auth");
const {
  requireSignin,
  userMiddleware,
} = require("../../common-middleware/index");

const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../../validator/user/index");
const user = require("../../models/user");

router.post("/user/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/user/signup", validateSignupRequest, isRequestValidated, signup);
router.get("/user/clientDetails", requireSignin, userMiddleware, getClientDetails )

module.exports = router;
