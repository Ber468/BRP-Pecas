import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Rota from './rota';

import Dashboard from '../pages/dashboard/dashboard';
import Clientes from '../pages/clientes/clientes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rota element={<Dashboard />} />} />
        <Route path="/cliente" element={<Rota element={<Clientes />} />} />
        <Route path="*" element={<Rota element={<Navigate to="/" />} />} />
      </Routes>
    </BrowserRouter>
  );
};