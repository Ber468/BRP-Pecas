const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createItemPedido = async (req, res) => {
  const { quantidade, id_pedido, id_produto } = req.body;
  const verificador = isEmpty([
    { nome: "Quantidade", valor: quantidade },
    { nome: "Id do Pedido", valor: id_pedido },
    { nome: "Id do Produto", valor: id_produto },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { rows } = await db.query(
    "INSERT INTO itemPedido (quantidade, id_pedido, id_produto) VALUES ($1, $2, $3)",
    [quantidade, id_pedido, id_produto]
  );

  res.status(201).send({
    message: "itemPedido adicionado com sucesso!",
    body: {
      itemPedido: { quantidade, id_pedido, id_produto },
    },
  });
};
};

// ==> Método responsável por listar todas as 'itemPedido':
exports.listAllItemPedido = async (req, res) => {
  const response = await db.query(
    "SELECT itemPedido.id_itemPedido, itemPedido.quantidade, pedido.descricao as pedido, produto.nome as produto " +
      "from itemPedido inner join pedido on itemPedido.id_pedido = pedido.id_pedido inner join produto on itemPedido.id_produto = produto.id_produto"
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'itemPedido' pelo 'Id':
exports.findItemPedidoById = async (req, res) => {
  const id_itemPedido = parseInt(req.params.id);
  const response = await db.query(
    "SELECT itemPedido.quantidade, pedido.descricao as pedido, produto.nome as produto " +
      "from itemPedido inner join pedido on itemPedido.id_pedido = pedido.id_pedido " +
      "inner join produto on itemPedido.id_produto = produto.id_produto WHERE id_itemPedido = $1",
    [id_itemPedido]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'itemPedido' pelo 'Id':
exports.updateItemPedidoById = async (req, res) => {
  const id_itemPedido = parseInt(req.params.id);
  const { quantidade, id_pedido, id_produto } = req.body;
  const verificador = isEmpty([
    { nome: "Quantidade", valor: quantidade },
    { nome: "Id do Pedido", valor: id_pedido },
    { nome: "Id do Produto", valor: id_produto },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {

  const response = await db.query(
    "UPDATE itemPedido SET quantidade = $1, id_pedido = $2, id_produto = $3 WHERE id_itemPedido = $4",
    [quantidade, id_pedido, id_produto, id_itemPedido]
  );

  res.status(200).send({ message: "ItemPedido atualizada com sucesso!" });
};
};

// ==> Método responsável por excluir uma 'ItemPedido' pelo 'Id':
exports.deleteItemPedidoById = async (req, res) => {
  const id_itemPedido = parseInt(req.params.id);
  await db.query("DELETE FROM itemPedido WHERE id_itemPedido = $1", [
    id_itemPedido,
  ]);

  res
    .status(200)
    .send({ message: "ItemPedido deletada com sucesso!", id_itemPedido });
};
