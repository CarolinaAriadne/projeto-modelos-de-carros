const carsModel = require('../model/CarModel');
const erroHandler = require('../error/error');

const getAllCars = async () => {
  const allCars = carsModel.getAllCars();

  if (allCars.length === 0) {
    throw erroHandler(404, 'Cars not found');
  }

  return allCars;
};

const getOneCar = async codigo => {
  const car = await carsModel.getOneCar(codigo);
  console.log(car);

  if (car.length === 0) {
    throw erroHandler(404, 'Car not found');
  }

  return car;
};

const createCar = async (modelo, placa) => {
  const verifyCar = await carsModel.getCarByplacaAndModelo(modelo, placa);

  if (verifyCar.length > 0) {
    throw erroHandler(409, 'Car already exists');
  }

  const getCodigoCar = await carsModel.createCar(modelo, placa);
  const newCar = { codigo: getCodigoCar, modelo, placa };

  return newCar;
};

const updateCar = async (codigo, modelo, placa) => {
  const codigoCar = await carsModel.getOneCar(codigo);

  if (codigoCar.length === 0) {
    throw erroHandler(404, 'Car not found');
  }

  const upCodigoCar = await carsModel.updateCar(codigo, modelo, placa);
  const getCarUpdated = await carsModel.getCarIdUp(upCodigoCar);

  return getCarUpdated;
};

const deleteCar = async codigo => {
  const car = await carsModel.getOneCar(codigo);

  if (car.length === 0) {
    throw erroHandler(404, 'Car not found');
  }

  await carsModel.deleteCar(codigo);
};

module.exports = {
  getAllCars,
  getOneCar,
  createCar,
  updateCar,
  deleteCar,
};
