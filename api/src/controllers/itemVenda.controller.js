const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createItemVenda = async (req, res) => {
  const { valor, id_venda, id_produto } = req.body;
  // const verificador = isEmpty([
  //   { valor: "Valor", valor: valor },
  //   { valor: "Id venda", valor: id_venda },
  //   { valor: "Id produto", valor: id_produto },
  // ]);
  // if (verificador) {
  //   res.status(500).send({
  //     message: verificador,
  //   });
  // } else {
  const { rows } = await db.query(
    "INSERT INTO itemvenda (valor, id_venda, id_produto) VALUES ($1, $2, $3)",
    [valor, id_venda, id_produto]
  );

  res.status(201).send({
    message: "Item Venda adicionado com sucesso!",
    body: {
      itemvenda: { valor, id_venda, id_produto },
    },
  });
};
// };

// ==> Método responsável por listar todos os 'Itens de vendas':
exports.listAllItemVenda = async (req, res) => {
  const response = await db.query(
    "SELECT itemvenda.id_itemvenda, itemvenda.valor, venda.valortotal as venda, produto.nome as produto  from itemvenda " +
      "inner join venda on itemvenda.id_venda = venda.id_venda inner join produto on itemvenda.id_produto = produto.id_produto"
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'ItemVenda' pelo 'Id':
exports.findItemVendaById = async (req, res) => {
  const id_itemvenda = parseInt(req.params.id);
  const response = await db.query(
    "SELECT itemvenda.valor, venda.valortotal as venda, produto.nome as produto  from itemvenda " +
      "inner join venda on itemvenda.id_venda = venda.id_venda inner join produto on " +
      "itemvenda.id_produto = produto.id_produto WHERE id_itemvenda = $1",
    [id_itemvenda]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'ItemVenda' pelo 'Id':
exports.updateItemVendaById = async (req, res) => {
  const id_itemvenda = parseInt(req.params.id);
  // const verificador = isEmpty([
  //   { valor: "Valor", valor: valor },
  //   { valor: "Id venda", valor: id_venda },
  //   { valor: "Id produto", valor: id_produto },
  // ]);
  // if (verificador) {
  //   res.status(500).send({
  //     message: verificador,
  //   });
  // } else {
  const { valor, id_venda, id_produto } = req.body;

  const response = await db.query(
    "UPDATE itemvenda SET valor = $1, id_venda = $2, id_produto = $3 WHERE id_itemvenda = $4",
    [valor, id_venda, id_produto, id_itemvenda]
  );

  res.status(200).send({ message: "ItemVenda atualizado com sucesso!" });
};
// };

// ==> Método responsável por excluir uma 'ItemVenda' pelo 'Id':
exports.deleteItemVendaById = async (req, res) => {
  const id_itemvenda = parseInt(req.params.id);
  await db.query("DELETE FROM itemvenda WHERE id_itemvenda = $1", [
    id_itemvenda,
  ]);

  res
    .status(200)
    .send({ message: "Item venda deletado com sucesso!", id_itemvenda });
};
