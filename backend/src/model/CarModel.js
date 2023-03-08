const connection = require('../model/db');

const getAllCars =  async () => {
    const query = 'SELECT * FROM dbCarModels.carros';
    const [response] = await (await connection).execute(query);

    return response;
};

const getOneCar = async (codigo) => {
    const query = 'SELECT * FROM dbCarModels.carros WHERE codigo = ?;';
    const [response] = await  (await connection).execute(query,[codigo]);

    return response;
};

const getCarByplacaAndModelo = async (modelo, placa) => {
    const query = 'SELECT * FROM dbCarModels.carros WHERE (modelo, placa) = (?,?);';
    const [response] = await (await connection).execute(query, [modelo,placa]);

    return response;
};

const createCar = async (modelo, placa) => {
    const query = 'INSERT INTO dbCarModels.carros (modelo, placa) VALUES (?,?);';;
    const [response] = await (await connection).execute(query, [modelo,placa]);

    return response.insertId;
};

const getCarIdUp = async (codigo) => {
    const query = "SELECT * FROM dbCarModels.carros WHERE codigo = ?;";
    const [response] = await (await connection).execute(query, [codigo]);

    return response[0];
};

const updateCar = async (codigo, modelo, placa) => {
    const query = 'UPDATE carros SET modelo=?, placa=? WHERE codigo = ?;';
    await (await connection).execute(query, [modelo,placa,codigo]);

    return codigo;
};

const deleteCar = async(codigo) => {
    const query = 'DELETE from carros WHERE codigo = ?;';
    await (await connection).execute(query, [codigo]);
}

module.exports = {
    getAllCars,
    getOneCar,
    createCar,
    getCarByplacaAndModelo,
    updateCar,
    getCarIdUp,
    deleteCar
};