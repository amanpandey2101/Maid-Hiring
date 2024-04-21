const express = require('express')
const router = express.Router();

const { usersList, updateStatus } = require("../../controller/admin/Application");
const { requireSignin, adminMiddleware } = require('../../common-middleware');

router.get('/users',requireSignin,adminMiddleware, usersList);
router.put('/user/:userId/status',requireSignin, adminMiddleware, updateStatus);


module.exports = router;