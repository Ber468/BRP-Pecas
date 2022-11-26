const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':
exports.createItemPedido = async (req, res) => {
  const { quantidade, id_pedido, id_produto } = req.body;
  const response = await db.query(
    "SELECT produto.nome, produto.precovenda FROM produto WHERE id_produto = $1",
    [id_produto]
  );
  const { rows } = await db.query(
    "INSERT INTO itempedido (quantidade, id_pedido, id_produto, prdnomeproduto, prdvalor) VALUES ($1, $2, $3, $4, $5)",
    [Number(quantidade), id_pedido, id_produto, response.rows[0].nome, response.rows[0].precovenda]
  );

  res.status(201).send({
    message: "ItemPedido adicionado com sucesso!",
    body: {
      itemPedido: { quantidade, id_pedido, id_produto },
    },
  });
};

// ==> Método responsável por listar todas as 'itemPedido':
exports.listAllItemPedido = async (req, res) => {
  const response = await db.query(
    "SELECT itempedido.id_itempedido, itempedido.quantidade, itempedido.prdvalor, produto.nome as produto, itempedido.id_produto " +
      "from itempedido inner join produto on itempedido.id_produto = produto.id_produto where itempedido.id_pedido = $1",
    [req.params.id]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'itemPedido' pelo 'Id':
exports.findItemPedidoById = async (req, res) => {
  const id_itempedido = parseInt(req.params.id);
  const response = await db.query(
    "SELECT itempedido.quantidade, produto.nome as produto from itempedido " +
      "inner join produto on itempedido.id_produto = produto.id_produto WHERE id_itempedido = $1",
    [id_itempedido]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'itemPedido' pelo 'Id':
exports.updateItemPedidoById = async (req, res) => {
  const id_itempedido = parseInt(req.params.id);
  const { quantidade, id_produto } = req.body;
  const response = await db.query(
    "UPDATE itempedido SET quantidade = $1, id_produto = $2 WHERE id_itempedido = $3",
    [quantidade, id_produto, id_itempedido]
  );

  res.status(200).send({ message: "ItemPedido atualizada com sucesso!" });
};

// ==> Método responsável por excluir uma 'ItemPedido' pelo 'Id':
exports.deleteItemPedidoById = async (req, res) => {
  const id_itempedido = parseInt(req.params.id);
  await db.query("DELETE FROM itempedido WHERE id_itempedido = $1", [
    id_itempedido,
  ]);

  res
    .status(200)
    .send({ message: "ItemPedido deletada com sucesso!", id_itempedido });
};
