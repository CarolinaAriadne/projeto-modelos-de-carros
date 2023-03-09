const express = require('express');
const router = express.Router();

const CarController = require('../controllers/CarController');
const { validateCar } = require('../middlewares/validateCar');

router.get('/cars', CarController.getAllCars);
router.get('/car/:codigo', CarController.getOneCar);
router.post('/newCar', validateCar, CarController.createCar);
router.put('/car/:codigo', validateCar, CarController.updateCar);
router.delete('/car/:codigo', CarController.deleteCar);

module.exports = router;
