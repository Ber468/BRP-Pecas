import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../Menu";


const FornecedorCon = lazy(() => import("../pages/fornecedor/FornecedorCon"));

function Rotas() {
  return (
    <div>
    <BrowserRouter>
    <Suspense fallback={<div>Carregando ...</div>}>
      <Menu />
        <Routes>
          <Route path="/fornecedor" element={<FornecedorCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default Rotas;