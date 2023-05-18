import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Recados from '../pages/Recados';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recados" element={<Recados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;