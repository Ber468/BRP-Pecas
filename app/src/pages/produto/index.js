import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get("/produto")
      .then((response) => {
        console.log(response);
        setProdutos(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <h1>Relação de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id_produto}>
            <b>Nome:</b>
            {produto.nome}
            <br />
            <b>PrecoVenda:</b>
            {produto.precovenda}
            <br />
            <b>QuantidadeEstoque:</b>
            {produto.quantidadeestoque}
            <br />
            <b>Tipo Produto:</b>
            {produto.id_tipoproduto}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
