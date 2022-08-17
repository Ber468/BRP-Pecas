const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createPeca = async (req, res) => {
  const { nome, precoVenda, quantidadeEstoque } = req.body;
  const { rows } = await db.query(
    "INSERT INTO pecas (nome, precoVenda, quantidadeEstoque) VALUES ($1, $2, $3)",
    [nome, precoVenda, quantidadeEstoque]
  );

  res.status(201).send({
    message: "Peca adicionada com sucesso!",
    body: {
      peca: { nome, precoVenda, quantidadeEstoque }
    },
  });
};

// ==> Método responsável por listar todas as 'Pecas':
exports.listAllPeca = async (req, res) => {
  const response = await db.query('SELECT * FROM pecas ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Pecas' pelo 'Id':
exports.findPecaById = async (req, res) => {
  const id_peca = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM pecas WHERE id_peca = $1', [id_peca]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar uma 'Peca' pelo 'Id':
exports.updatePecaById = async (req, res) => {
  const id_peca = parseInt(req.params.id);
  const { nome, precoVenda, quantidadeEstoque } = req.body;

  const response = await db.query(
    "UPDATE pecas SET nome = $1, precoVenda = $2, quantidadeEstoque = $3 WHERE id_peca = $4",
    [nome, precoVenda, quantidadeEstoque, id_peca]
  );

  res.status(200).send({ message: "Peca atualizada com sucesso!" });
};

// ==> Método responsável por excluir uma 'Peca' pelo 'Id':
exports.deletePecaById = async (req, res) => {
  const id_peca = parseInt(req.params.id);
  await db.query('DELETE FROM pecas WHERE id_peca = $1', [
    id_peca
  ]);

  res.status(200).send({ message: 'Peca deletada com sucesso!', id_peca });
};