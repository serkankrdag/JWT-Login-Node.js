const express = require('express');
const router = express.Router();

const asyncHandler = require('../middleware/asyncHandler');
const regiserRequest = require('../middleware/request/registerRequest');
const regiserMiddleware = require('../middleware/registerMiddleware');
const loginMiddleware = require('../middleware/loginMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controller/userController');

router.get('/', asyncHandler(userController.list));
router.post('/register', regiserRequest, regiserMiddleware, asyncHandler(userController.add));
router.post('/login', loginMiddleware, asyncHandler(userController.login));

router.get('/admin', authMiddleware, function (req, res, next) {
    const decodedToken = req.decodedToken;
    console.log(decodedToken.userID);
    res.send("Giriş Başarılı");
})

module.exports = router;