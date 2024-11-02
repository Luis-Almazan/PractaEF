import { Routes, Route } from 'react-router-dom'
//import './App.css'
import Consulta from './Components/Consulta'
import Ingreso from './Components/Ingreso'
import ConsultaDato from './Components/ConsultarDato'

function App() {

  return (
    <>
      <Routes>  
        <Route path='/Consulta' element={<Consulta/>}/>
        <Route path='/Ingreso' element={<Ingreso/>}/>
        <Route path='/ConsultaDato' element={<ConsultaDato/>}/>
        
      </Routes>     
    </>
  )
}

export default App
