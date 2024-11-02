"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Datos }  from '../../../Interfaces/interfaces'
  
const ConsultarDato = () => {
  const [DataObtenida, setDato] = useState<Datos[]>([]);
  const [searchId, setSearchId] = useState(''); 
  
  const Consultar = () => {
    console.log(searchId);
    axios.get<Datos>(`/api/users?id=${searchId}`)
      .then(response => {
        setDato([response.data]); 
        console.log([response.data]); 
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
};  
  return (
    <div>
      <h1>Consulta de Datos</h1>
      
      <div>
        <input 
          type="text" 
          value={searchId} 
          onChange={(e) => setSearchId(e.target.value)} 
        />
        <button onClick={Consultar}>Consultar</button>
      </div>

      <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {DataObtenida.map(dato => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.name}</td>
                <td>{dato.email}</td>
              </tr>
            ))}
          </tbody>
        </table> 
         </div> 
        
  );
}

export default ConsultarDato;
