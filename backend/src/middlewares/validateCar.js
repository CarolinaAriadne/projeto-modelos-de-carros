const joi = require('joi');

const car = joi.object({
    modelo: joi.string().required(),
    placa: joi.string().min(7).max(7).required(),
});

const validateCar= (req, res, next) => {
    const { modelo, placa } = req.body;
    const { error } = car.validate({ modelo, placa});

    if(error) {
        return res
        .status(400)
        .json({ messagem: 'Some required fields are missing, or fields must be string, or the field requires a minimum of characters'});
    };

    next();
};

module.exports = {
    validateCar
};