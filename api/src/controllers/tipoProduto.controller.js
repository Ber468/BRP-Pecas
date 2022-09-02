const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createTipoProduto = async (req, res) => {
  const { nome } = req.body;
  const { rows } = await db.query(
    "INSERT INTO tipoProduto (nome) VALUES ($1)",
    [nome]
  );

  res.status(201).send({
    message: "Tipo de Produto adicionado com sucesso!",
    body: {
      tipoProduto: { nome }
    },
  });
};

// ==> Método responsável por listar todos os 'Tipos de Produtos':
exports.listAllTipoProduto = async (req, res) => {
  const response = await db.query('SELECT * FROM tipoProduto ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'TipoProduto' pelo 'Id':
exports.findTipoProdutoById = async (req, res) => {
  const id_tipoProduto = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM tipoProduto WHERE id_tipoProduto = $1', [id_tipoProduto]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'TipoProduto' pelo 'Id':
exports.updateTipoProdutoById = async (req, res) => {
  const id_tipoProduto = parseInt(req.params.id);
  const { nome } = req.body;

  const response = await db.query(
    "UPDATE tipoProduto SET nome = $1 WHERE id_tipoProduto = $2",
    [nome, id_tipoProduto]
  );

  res.status(200).send({ message: "Tipo de Produto atualizado com sucesso!" });
};

// ==> Método responsável por excluir um 'TipoProduto' pelo 'Id':
exports.deleteTipoProdutoById = async (req, res) => {
  const id_tipoProduto = parseInt(req.params.id);
  await db.query('DELETE FROM tipoProduto WHERE id_tipoProduto = $1', [
    id_tipoProduto
  ]);

  res.status(200).send({ message: 'Tipo de Produto deletado com sucesso!', id_tipoProduto });
};