const express = require('express');
const router = express.Router();

const CarController = require('../controllers/CarController');
const { validateCar } = require('../middlewares/validateCar');


router.get('/carros', CarController.getAllCars);
router.get('/carros/:codigo', CarController.getOneCar);
router.post('/newCar', validateCar, CarController.createCar);
router.put('/carros/:codigo', validateCar, CarController.updateCar);
router.delete('/carros/:codigo', CarController.deleteCar);

module.exports = router;