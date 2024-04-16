  
const express = require('express');
const router = express.Router();
const { signin , signup } = require("../../controller/admin/auth");
const {adminMiddleware,requireSignin} = require("../../common-middleware/")




const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../../validator/admin/index');

router.post('/admin/signin',validateSigninRequest ,isRequestValidated, signin);
router.post('/admin/signup',validateSignupRequest,isRequestValidated, signup);


  
module.exports = router;