import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function ItemPedidos() {
  const [itemPedidos, setItemPedidos] = useState([]);

  useEffect(() => {
    api
      .get("/itemPedidos")
      .then((response) => {
        console.log(response);
        setItemPedidos(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <h1>Relação de Itens Pedidos</h1>
      <ul>
        {itemPedidos.map((itempedido) => (
          <li key={itempedido.id_itempedido}>
            <b>Quantidade:</b>
            {itempedido.quantidade}
            <br />
            <b>Pedido:</b>
            {itempedido.id_pedido}
            <br />
            <b>Produto:</b>
            {itempedido.id_produto}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
