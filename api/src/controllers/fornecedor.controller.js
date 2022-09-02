const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createFornecedor = async (req, res) => {
  const { nomeFantasia, razaoSocial, cnpj } = req.body;
  const { rows } = await db.query(
    "INSERT INTO fornecedor (nomeFantasia, razaoSocial, cnpj) VALUES ($1, $2, $3)",
    [nomeFantasia, razaoSocial, cnpj ]
  );

  res.status(201).send({
    message: "Fornecedor adicionado com sucesso!",
    body: {
      fornecedor: { nomeFantasia, razaoSocial, cnpj }
    },
  });
};

// ==> Método responsável por listar todos os 'Fornecedores':
exports.listAllFornecedor = async (req, res) => {
  const response = await db.query('SELECT * FROM fornecedor ORDER BY nomeFantasia ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Fornecedor' pelo 'Id':
exports.findFornecedorById = async (req, res) => {
  const id_fornecedor = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM fornecedor WHERE id_fornecedor = $1', [id_fornecedor]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Fornecedor' pelo 'Id':
exports.updateFornecedorById = async (req, res) => {
  const id_fornecedor = parseInt(req.params.id);
  const { nomeFantasia, razaoSocial, cnpj } = req.body;

  const response = await db.query(
    "UPDATE fornecedor SET nomeFantasia = $1, razaoSocial = $2, cnpj = $3 WHERE id_fornecedor = $4",
    [nomeFantasia, razaoSocial, cnpj]
  );

  res.status(200).send({ message: "Fornecedor atualizado com sucesso!" });
};

// ==> Método responsável por excluir uma 'Fornecedor' pelo 'Id':
exports.deleteFornecedorById = async (req, res) => {
  const id_fornecedor = parseInt(req.params.id);
  await db.query('DELETE FROM fornecedor WHERE id_fornecedor = $1', [
    id_fornecedor
  ]);

  res.status(200).send({ message: 'Fornecedor deletado com sucesso!', id_fornecedor });
};