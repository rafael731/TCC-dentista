import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './pages/home/App'
import Login from './pages/login';
import Odontologia from './pages/OdontologiaEstetica';
import Limpeza from './pages/LimpezaBucal';



export default function Navegacao() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/odontologia' element={<Odontologia />} />
        <Route path='/LimpezaBucal' element={<Limpeza />} />
      </Routes>
    </BrowserRouter>

  )
}