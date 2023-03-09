const CarService = require('../services/CarService');

const getAllCars = async (_req, res, next) => {
  try {
    const allCars = await CarService.getAllCars();
    return res.status(200).json(allCars);
  } catch (error) {
    return next(error);
  }
};

const getOneCar = async (req, res, next) => {
  try {
    const { codigo } = req.params;
    const car = await CarService.getOneCar(codigo);
    return res.status(200).json(car);
  } catch (error) {
    return next(error);
  }
};

const createCar = async (req, res, next) => {
  try {
    const { modelo, placa } = req.body;
    const newCar = await CarService.createCar(modelo, placa);
    return res.status(200).json(newCar);
  } catch (error) {
    return next(error);
  }
};

const updateCar = async (req, res, next) => {
  try {
    const { codigo } = req.params;
    const { modelo, placa } = req.body;
    const updateCar = await CarService.updateCar(codigo, modelo, placa);
    return res.status(200).json(updateCar);
  } catch (error) {
    return next(error);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const { codigo } = req.params;
    await CarService.deleteCar(codigo);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllCars,
  getOneCar,
  createCar,
  updateCar,
  deleteCar,
};
