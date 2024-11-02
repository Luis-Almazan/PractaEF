import React, { useState } from 'react';
import axios from 'axios';
import { Datos }  from './Interfaces/interfaces'

const Consulta = () => {
    const [DataObtenida, setDato] = useState<Datos[]>([]);

    const Consultar = () => {
        axios.get<Datos[]>('/api/blog')
          .then(response => {
            setDato(response.data);
            console.log(response.data) 
          })
          .catch(error => {
            console.error("Error al obtener el dato:", error);
          });
      };
        

    return (
        /* */
        <>
        <div>
        <h1>Consulta de Datos</h1>
        <div>
          <button onClick={Consultar}>Consultar</button>
        </div>
  
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {DataObtenida.map(dato => (
              <tr key={dato.id}>
                <td>{dato.title}</td>
                <td>{dato.author}</td>
                <td>{dato.date}</td>
              </tr>
            ))}
          </tbody>
        </table> 
        </div> 
        </>

    )
}

export default Consulta