import React, { useState } from 'react';
import axios from 'axios';
import { Curso } from './Interfaces/interfaces'; // Asegúrate de ajustar la ruta si la interfaz está en otra carpeta

const AgregarCurso = () => {
  // Estado para almacenar los datos del curso
  const [curso, setCurso] = useState<Curso>({
    nombre: '',
    creditos: 0,
    descripcion: ''
  });

  // Maneja el cambio de datos en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurso({
      ...curso,
      [name]: name === 'creditos' ? parseInt(value) : value, // Convierte `creditos` a número
    });
  };

  // Envía los datos del curso mediante una solicitud POST
  const agregarCurso = () => {
    axios.post('/api/Cursos', curso)
      .then(response => {
        console.log("Curso agregado:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar el curso:", error);
      });
  };

  return (
    <div>
      <h1>Agregar Curso</h1>
      <form onSubmit={(e) => { e.preventDefault(); agregarCurso(); }}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={curso.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Créditos:</label>
          <input
            type="number"
            name="creditos"
            value={curso.creditos}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={curso.descripcion}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar Curso</button>
      </form>
    </div>
  );
}

export default AgregarCurso;
