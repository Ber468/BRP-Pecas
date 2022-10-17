import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../Menu";

const ClienteCon = lazy(() => import("../pages/cliente/ClienteCon"));
const FornecedorCon = lazy(() => import("../pages/fornecedor/FornecedorCon"));
const TipoUsuarioCon = lazy(() => import("../pages/tipoUsuario/TipoUsuarioCon"));

function Rotas() {
  return (
    <div>
    <BrowserRouter>
    <Suspense fallback={<div>Carregando ...</div>}>
      <Menu />
        <Routes>
          <Route path="/cliente" element={<ClienteCon />} />
          <Route path="/fornecedor" element={<FornecedorCon />} />
          <Route path="/TipoUsuario" element={<TipoUsuarioCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default Rotas;