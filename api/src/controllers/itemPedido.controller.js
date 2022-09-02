// A FAZER


const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createVenda = async (req, res) => {
  const { descricao, data, valorTotal, usuario, cliente } = req.body;
  const { rows } = await db.query(
    "INSERT INTO venda (descricao, data, valorTotal, usuario, cliente) VALUES ($1, $2, $3, $4, $5)",
    [descricao, data, valorTotal, usuario, cliente ]
  );

  res.status(201).send({
    message: "Venda adicionado com sucesso!",
    body: {
      venda: { descricao, data, valorTotal, usuario, cliente }
    },
  });
};

// ==> Método responsável por listar todas as 'Vendas':
exports.listAllVenda = async (req, res) => {
  const response = await db.query('SELECT * FROM venda ORDER BY descricao ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Venda' pelo 'Id':
exports.findVendaById = async (req, res) => {
  const id_venda = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM venda WHERE id_venda = $1', [id_venda]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Venda' pelo 'Id':
exports.updateVendaById = async (req, res) => {
  const id_venda = parseInt(req.params.id);
  const { descricao, data, valorTotal, usuario, cliente } = req.body;

  const response = await db.query(
    "UPDATE venda SET descricao = $1, data = $2, valorTotal = $3, usuario = $4, cliente = $5 WHERE id_venda = $6",
    [descricao, data, valorTotal, usuario, cliente]
  );

  res.status(200).send({ message: "Venda atualizada com sucesso!" });
};

// ==> Método responsável por excluir uma 'Venda' pelo 'Id':
exports.deleteVendaById = async (req, res) => {
  const id_venda = parseInt(req.params.id);
  await db.query('DELETE FROM venda WHERE id_venda = $1', [
    id_venda
  ]);

  res.status(200).send({ message: 'Venda deletada com sucesso!', id_venda });
};