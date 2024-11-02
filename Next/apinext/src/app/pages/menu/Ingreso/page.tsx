"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Datos } from '../../../Interfaces/interfaces'; // Asegúrate de ajustar la ruta si la interfaz está en otra carpeta

const AgregarProveedor = () => {
  // Estado para almacenar los datos del proveedor
  const [dato, setDato] = useState<Datos>({
    name: '',
    email: ''
  });

  // Maneja el cambio de datos en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDato({
      ...dato,
      [name]: value // Actualiza el campo correspondiente en el estado
    });
  };

  // Envía los datos del proveedor mediante una solicitud POST
  const agregarProveedor = () => {
    axios.post('/api/users', dato)
      .then(response => {
        console.log("Proveedor agregado:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar el proveedor:", error);
      });
  };

  return (
    <div>
      <h1>Agregar Proveedor</h1>
      <form onSubmit={(e) => { e.preventDefault(); agregarProveedor(); }}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name" // Cambiado a "name" para coincidir con el estado
            value={dato.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email" // Cambiado a "email" para coincidir con el estado y mejorar semántica
            name="email" // Cambiado a "email" para coincidir con el estado
            value={dato.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar Proveedor</button>
      </form>
    </div>
  );
}

export default AgregarProveedor;
