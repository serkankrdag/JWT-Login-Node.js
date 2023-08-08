const User = require('../model/User');
const asyncHandler = require('../middleware/asyncHandler');
const bcrypt = require('bcrypt');

exports.list = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({ success: true, data: users, });
});

exports.add = asyncHandler(async (req, res) => {
  const { name, email, status } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({ name, email, password, status });
  await newUser.save();
  res.status(200).json({ success: true, message: 'Veri başarıyla kaydedildi.', data: newUser });
});

exports.login = asyncHandler(async (req, res) => {
  // Yönlendirme Kodları Gelecek
});
