const secretKey = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, secretKey);
        req.decodedToken = decodedToken;
        next();
    } catch (error) {
        if (error.name ==="TokenExpiredError") {
            return res.status(400).send("Token Süresi Doldu");
        } else if (error.name ==="JsonWebTokenError") {
            return res.status(400).send("Geçersiz Token");
        } else {
            return res.status(400).send("Yetkisiz Giriş");
        }
    }
    const authMiddleware = async (req, res, next) => { 
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, secretKey);
        req.decodedToken = decodedToken;
        next();
    };
}

