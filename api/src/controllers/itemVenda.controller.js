const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createItemVenda = async (req, res) => {
  const { quantidade, valor, id_venda, id_produto } = req.body;
  const { rows } = await db.query(
    "INSERT INTO itemVenda (quantidade, valor, id_venda, id_produto) VALUES ($1, $2, $3, $4)",
    [quantidade, valor, id_venda, id_produto ]
  );

  res.status(201).send({
    message: "Item Venda adicionado com sucesso!",
    body: {
      itemVenda: { quantidade, valor, id_venda, id_produto }
    },
  });
};

// ==> Método responsável por listar todos os 'Itens de vendas':
exports.listAllItemVenda = async (req, res) => {
  const response = await db.query('SELECT * FROM itemVenda ORDER BY quantidade ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'ItemVenda' pelo 'Id':
exports.findItemVendaById = async (req, res) => {
  const id_itemVenda = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM itemVenda WHERE id_itemVenda = $1', [id_itemVenda]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'ItemVenda' pelo 'Id':
exports.updateItemVendaById = async (req, res) => {
  const id_itemVenda = parseInt(req.params.id);
  const { quantidade, valor, id_venda, id_produto } = req.body;

  const response = await db.query(
    "UPDATE venda SET quantidade = $1, valor = $2, id_venda = $3, id_produto = $4 WHERE id_venda = $5",
    [quantidade, valor, id_venda, id_produto]
  );

  res.status(200).send({ message: "ItemVenda atualizado com sucesso!" });
};

// ==> Método responsável por excluir uma 'ItemVenda' pelo 'Id':
exports.deleteItemVendaById = async (req, res) => {
  const id_itemVenda = parseInt(req.params.id);
  await db.query('DELETE FROM itemVenda WHERE id_itemVenda = $1', [
    id_venda
  ]);

  res.status(200).send({ message: 'Item venda deletado com sucesso!', id_itemVenda });
};