const User = require('../model/User');

const registerMiddleware = async (req, res, next) => {
  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Bu e-posta adresi zaten kayıtlı.' });
  }

  next();
};

module.exports = registerMiddleware;
