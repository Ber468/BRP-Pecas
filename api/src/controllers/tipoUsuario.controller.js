const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createTipoUsuario = async (req, res) => {
  const { nome } = req.body;
  const verificador = isEmpty([
    { nome: "Nome", valor: nome },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { rows } = await db.query(
    "INSERT INTO tipoUsuario (nome) VALUES ($1)",
    [nome]
  );

  res.status(201).send({
    message: "Tipo de Usuario adicionado com sucesso!",
    body: {
      tipoUsuario: { nome }
    },
  });
};
};

// ==> Método responsável por listar todos os 'Tipos de Usuarios':
exports.listAllTipoUsuario = async (req, res) => {
  const response = await db.query('SELECT * FROM tipoUsuario ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'TipoUsuario' pelo 'Id':
exports.findTipoUsuarioById = async (req, res) => {
  const id_tipoUsuario = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM tipoUsuario WHERE id_tipoUsuario = $1', [id_tipoUsuario]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'TipoUsuario' pelo 'Id':
exports.updateTipoUsuarioById = async (req, res) => {
  const id_tipoUsuario = parseInt(req.params.id);
  const verificador = isEmpty([
    { nome: "Nome", valor: nome },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { nome } = req.body;

  const response = await db.query(
    "UPDATE tipoUsuario SET nome = $1 WHERE id_tipoUsuario = $2",
    [nome, id_tipoUsuario]
  );

  res.status(200).send({ message: "Tipo de Usuario atualizado com sucesso!" });
};
};

// ==> Método responsável por excluir um 'TipoUsuario' pelo 'Id':
exports.deleteTipoUsuarioById = async (req, res) => {
  const id_tipoUsuario = parseInt(req.params.id);
  await db.query('DELETE FROM tipoUsuario WHERE id_tipoUsuario = $1', [
    id_tipoUsuario
  ]);

  res.status(200).send({ message: 'Tipo de Usuario deletado com sucesso!', id_tipoUsuario });
};