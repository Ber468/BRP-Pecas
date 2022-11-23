const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createTipoProduto = async (req, res) => {
  const { descricao } = req.body;
  const verificador = isEmpty([
    { nome: "Nome", valor: descricao },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { rows } = await db.query(
    "INSERT INTO tipoProduto (descricao) VALUES ($1)",
    [descricao]
  );

  res.status(201).send({
    message: "Tipo de Produto adicionado com sucesso!",
    body: {
      tipoProduto: { descricao },
    },
  });
};
};

// ==> Método responsável por listar todos os 'Tipos de Produtos':
exports.listAllTipoProduto = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM tipoProduto ORDER BY descricao ASC"
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'TipoProduto' pelo 'Id':
exports.findTipoProdutoById = async (req, res) => {
  const id_tipoProduto = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM tipoProduto WHERE id_tipoProduto = $1",
    [id_tipoProduto]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'TipoProduto' pelo 'Id':
exports.updateTipoProdutoById = async (req, res) => {
  const id_tipoProduto = parseInt(req.params.id);
  const { descricao } = req.body;
  const verificador = isEmpty([
    { tipo_nome: "Tipo Nome", valor: descricao },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {

  const response = await db.query(
    "UPDATE tipoProduto SET descricao = $1 WHERE id_tipoProduto = $2",
    [descricao, id_tipoProduto]
  );

  res.status(200).send({ message: "Tipo de Produto atualizado com sucesso!" });
};
};

// ==> Método responsável por excluir um 'TipoProduto' pelo 'Id':
exports.deleteTipoProdutoById = async (req, res) => {
  const id_tipoProduto = parseInt(req.params.id);
  await db.query("DELETE FROM tipoProduto WHERE id_tipoProduto = $1", [
    id_tipoProduto,
  ]);

  res
    .status(200)
    .send({ message: "Tipo de Produto deletado com sucesso!", id_tipoProduto });
};
