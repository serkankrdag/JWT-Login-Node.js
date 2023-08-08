const User = require('../model/User');
const secretKey = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({ success: false, message: 'Kullanıcı bulunamadı.' });
    return;
  }
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(400).json({ success: false, message: 'Hatalı şifre.' });
    return;
  }
  const token = jwt.sign({ userID: user._id }, secretKey, { expiresIn: '1h' });
  res.status(200).json({ success: true, message: 'Giriş başarılı.', data: token, secretKey });

  next();
};

module.exports = loginMiddleware;
