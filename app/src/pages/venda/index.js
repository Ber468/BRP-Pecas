import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function Vendas() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    api
      .get("/venda")
      .then((response) => {
        console.log(response);
        setVendas(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <h1>Relação de Vendas</h1>
      <ul>
        {vendas.map((venda) => (
          <li key={venda.id_venda}>
            <b>Data:</b>
            {venda.data}
            <br />
            <b>Valor Total:</b>
            {venda.valorTotal}
            <br />
            <b>Usuario:</b>
            {venda.id_usuario}
            <br />
            <b>Cliente:</b>
            {venda.id_cliente}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
