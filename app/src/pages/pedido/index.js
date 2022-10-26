import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api
      .get("/pedido")
      .then((response) => {
        console.log(response);
        setPedidos(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <h1>Relação de Pedidos</h1>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id_pedido}>
            <b>Descricao:</b>
            {pedido.descricao}
            <br />
            <b>Data:</b>
            {pedido.data}
            <br />
            <b>Fornecedor:</b>
            {pedido.id_fornecedor}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
