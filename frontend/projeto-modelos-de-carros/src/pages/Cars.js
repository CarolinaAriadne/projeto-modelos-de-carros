import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function CarsPage() {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        loadCars();
    });

    const loadCars = async () => {
        try {
            const response = await api.get('/carros');
            console.log(response);
            setCars(response.data)
        } catch (err) {
            setError('Bad Request');
        };

    };
        console.log('data:', cars);
    return (
        <form>
            <header>
                <h1>Cars</h1>
            </header>
            <section>
                {cars.map((car) => {
                    return (
                        <p key={car.codigo}>{car.modelo} {car.placa}</p>
                    )
                })
                }
            </section>
            <section>{error && <p>{error}</p>}</section>
        </form>
    )

    };
