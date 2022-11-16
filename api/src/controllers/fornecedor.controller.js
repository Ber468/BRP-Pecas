const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createFornecedor = async (req, res) => {
  const { nomefantasia, razaosocial, cnpj } = req.body;
  // const verificador = isEmpty([
  //   { nome: "Nome Fantasia", valor: nomeFantasia },
  //   { nome: "Razão Social", valor: razaoSocial },
  //   { nome: "CNPJ", valor: cnpj },
  // ]);
  // if (verificador) {
  //   res.status(500).send({
  //     message: verificador,
  //   });
  // } else {
  const { rows } = await db.query(
    "INSERT INTO fornecedor (nomefantasia, razaosocial, cnpj) VALUES ($1, $2, $3)",
    [nomefantasia, razaosocial, cnpj]
  );

  res.status(201).send({
    message: "Fornecedor adicionado com sucesso!",
    body: {
      fornecedor: { nomefantasia, razaosocial, cnpj },
    },
  });
};
// };

// ==> Método responsável por listar todos os 'Fornecedores':
exports.listAllFornecedor = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM fornecedor ORDER BY nomefantasia ASC"
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Fornecedor' pelo 'Id':
exports.findFornecedorById = async (req, res) => {
  const id_fornecedor = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM fornecedor WHERE id_fornecedor = $1",
    [id_fornecedor]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Fornecedor' pelo 'Id':
exports.updateFornecedorById = async (req, res) => {
  const id_fornecedor = parseInt(req.params.id);
  // const verificador = isEmpty([
  //   { nome: "Nome Fantasia", valor: nomeFantasia },
  //   { nome: "Razão Social", valor: razaoSocial },
  //   { nome: "CNPJ", valor: cnpj },
  // ]);
  // if (verificador) {
  //   res.status(500).send({
  //     message: verificador,
  //   });
  // } else {
  const { nomefantasia, razaosocial, cnpj } = req.body;

  const response = await db.query(
    "UPDATE fornecedor SET nomefantasia = $1, razaosocial = $2, cnpj = $3 WHERE id_fornecedor = $4",
    [nomefantasia, razaosocial, cnpj, id_fornecedor]
  );

  res.status(200).send({ message: "Fornecedor atualizado com sucesso!" });
};
// };

// ==> Método responsável por excluir uma 'Fornecedor' pelo 'Id':
exports.deleteFornecedorById = async (req, res) => {
  const id_fornecedor = parseInt(req.params.id);
  await db.query("DELETE FROM fornecedor WHERE id_fornecedor = $1", [
    id_fornecedor,
  ]);

  res
    .status(200)
    .send({ message: "Fornecedor deletado com sucesso!", id_fornecedor });
};
