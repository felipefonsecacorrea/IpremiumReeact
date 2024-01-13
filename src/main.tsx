import ReactDOM from 'react-dom/client'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './index.css';

import Header from './componentes/Header';
import Home from './pages/Home';
import Footer from './componentes/Footer';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Sobre' element={<Sobre/>} />
        <Route path='Contatos' element={<Contatos/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
