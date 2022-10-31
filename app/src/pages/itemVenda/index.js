import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function ItemVendas() {
  const [itemVendas, setItemVendas] = useState([]);

  useEffect(() => {
    api
      .get("/itemVendas")
      .then((response) => {
        console.log(response);
        setItemVendas(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <h1>Relação de Itens Vendas</h1>
      <ul>
        {itemVendas.map((itemvenda) => (
          <li key={itemvenda.id_itemvenda}>
            <b>Valor:</b>
            {itemvenda.valor}
            <br />
            <b>Venda:</b>
            {itemvenda.id_venda}
            <br />
            <b>Produto:</b>
            {itemvenda.id_produto}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
