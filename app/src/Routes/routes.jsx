import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../Menu";

const ClienteCon = lazy(() => import("../pages/cliente/ClienteCon"));
const FornecedorCon = lazy(() => import("../pages/fornecedor/FornecedorCon"));
const TipoUsuarioCon = lazy(() => import("../pages/tipoUsuario/TipoUsuarioCon"));
const TipoProdutoCon = lazy(() => import("../pages/tipoProduto/TipoProdutoCon"));
const UsuarioCon = lazy(() => import("../pages/usuario/UsuarioCon"));
const VendaCon = lazy(() => import("../pages/venda/VendaCon"));
const PedidoCon = lazy(() => import("../pages/pedido/PedidoCon"));
const ProdutoCon = lazy(() => import("../pages/produto/ProdutoCon"));

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
          <Route path="/TipoProduto" element={<TipoProdutoCon />} />
          <Route path="/usuario" element={<UsuarioCon />} />
          <Route path="/venda" element={<VendaCon />} />
          <Route path="/pedido" element={<PedidoCon />} />
          <Route path="/produto" element={<ProdutoCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default Rotas;