import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadCars();
  });

  const loadCars = async () => {
    try {
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (err) {
      setError('Bad Request');
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await api.post('/newCar', { modelo, placa });
      setCars([...cars, response.data.modelo, response.data.placa]);
    } catch (err) {
      setError('Dados inválidos');
    }
  };

  const disableSubmit = () => {
    if (
      typeof modelo === 'string' &&
      typeof placa === 'string' &&
      placa.length === 7
    ) {
      setDisabled(false);
      setError('');
    } else {
      setDisabled(true);
      setError('Dados inválidos');
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <header>
        <h1>Carros</h1>
      </header>
      <section className="main-container">
        <section className="new-car-container">
          <input
            className="inputModelo"
            placeholder="modelo"
            name="modelo"
            type="text"
            onChange={({ target }) => setModelo(target.value)}
            onKeyUp={disableSubmit}
            value={modelo}
          ></input>
          <input
            className="inputPlaca"
            placeholder="placa"
            name="placa"
            type="text"
            onChange={({ target }) => setPlaca(target.value)}
            onKeyUp={disableSubmit}
            value={placa}
          ></input>
          <button type="submit" disabled={disabled}>
            Criar
          </button>
        </section>
        <section>
          {cars.map(car => {
            return (
              <section className="all-cars-container">
                <p key={car.codigo}>
                  {car.modelo} {car.placa}
                </p>
                <button className="btn-excluir">Excluir</button>
                <button className="btn-editar">Editar</button>
              </section>
            );
          })}
        </section>
        <section>{error && <p>{error}</p>}</section>
      </section>
    </form>
  );
}
