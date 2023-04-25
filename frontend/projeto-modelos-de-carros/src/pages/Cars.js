import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Modal from 'react-modal';

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [oneCar, setCar] = useState([{ codigo: 0, modelo: '', placa: '' }]);
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
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
      setModelo('');
      setPlaca('');
    } catch (err) {
      setError('Dados inválidos');
    }
  };

  const removeCar = async codigo => {
    try {
      await api.delete(`/car/${codigo}`);
      const newArrayWithoutCar = cars.filter(car => {
        return car.codigo !== codigo;
      });
      setCars(newArrayWithoutCar);
    } catch (err) {
      setError('Bad request');
    }
  };

  const openModal = codigo => {
    setIsOpen(true);

    getOneCar(codigo);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModelo('');
    setPlaca('');
  };

  const getOneCar = async codigo => {
    try {
      let response = await api.get(`/car/${codigo}`);
      setCar(response.data);
      setModelo(response.data[0].modelo);
      setPlaca(response.data[0].placa);
    } catch (err) {
      setError('Bad request');
    }
  };

  const updateCar = async oneCar => {
    let code = oneCar[0].codigo;
    try {
      await api.put(`/car/${code}`, { modelo, placa });
      alert('Sua mudança foi realizada com sucesso!');
    } catch (err) {
      setError('Bad request');
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
        <h1>Modelos de carros</h1>
      </header>
      <section className="main-container">
        <section className="new-car-container">
          <input
            placeholder="modelo"
            name="modelo"
            type="text"
            onChange={({ target }) => setModelo(target.value)}
            value={modelo}
          ></input>
          <input
            placeholder="placa"
            name="placa"
            type="text"
            onChange={({ target }) => setPlaca(target.value)}
            onKeyUp={disableSubmit}
            value={placa}
          ></input>
          <button className="newCarButton" type="submit" disabled={disabled}>
            Criar
          </button>
        </section>
        <section>
          {cars.map(car => {
            return (
              <section className="all-cars-container">
                <p className="p-addCar" key={car.codigo}>
                  {car.modelo} {car.placa}
                </p>
                <button
                  className="btn-ex-edit"
                  type="button"
                  onClick={() => removeCar(car.codigo)}
                >
                  Excluir
                </button>
                <button
                  className="btn-ex-edit"
                  type="button"
                  onClick={() => openModal(car.codigo)}
                >
                  Editar
                </button>
              </section>
            );
          })}
        </section>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <input
            className="inputModal"
            placeholder="modelo"
            name="modelo"
            type="text"
            onChange={({ target }) => setModelo(target.value)}
            value={modelo}
          ></input>
          <input
            className="inputModal"
            placeholder="placa"
            name="placa"
            type="text"
            onChange={({ target }) => setPlaca(target.value)}
            onKeyUp={disableSubmit}
            value={placa}
          ></input>
          <button
            className="btnSalvarVoltar"
            type="button"
            onClick={closeModal}
          >
            Voltar
          </button>
          <button
            className="btnSalvarVoltar"
            type="submit"
            disabled={disabled}
            onClick={() => updateCar(oneCar)}
          >
            Salvar
          </button>
        </Modal>
      </section>
      <section>{error && <p className="error">{error}</p>}</section>
    </form>
  );
}
