const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const registerRequest = (req, res, next) => {

    if (typeof req.params.id !== 'undefined') {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).send("Geçersiz ID formatı.");
            return;
        }
    }

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(9).required(),
        password: Joi.string().min(9).required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
        status: Joi.number().integer(),
    });

    const result = schema.validate({ 
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password,
        status: req.body.status
    })
    if (result.error) {
        res.status(400).send("Hata oluştu: Lütfen girilen verilerin doğru formatta olduğundan emin olun.");
        return;
    }

    next();
};
  
module.exports = registerRequest;
  