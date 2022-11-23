const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createTipoUsuario = async (req, res) => {
  const { tipo_nome } = req.body;
  const verificador = isEmpty([
    { nome: "Nome", valor: tipo_nome },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { rows } = await db.query(
    "INSERT INTO tipoUsuario (tipo_nome) VALUES ($1)",
    [tipo_nome]
  );

  res.status(201).send({
    message: "Tipo de Usuario adicionado com sucesso!",
    body: {
      tipoUsuario: { tipo_nome },
    },
  });
};
};

// ==> Método responsável por listar todos os 'Tipos de Usuarios':
exports.listAllTipoUsuario = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM tipoUsuario ORDER BY tipo_nome ASC"
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'TipoUsuario' pelo 'Id':
exports.findTipoUsuarioById = async (req, res) => {
  const id_tipousuario = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM tipoUsuario WHERE id_tipoUsuario = $1",
    [id_tipousuario]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'TipoUsuario' pelo 'Id':
exports.updateTipoUsuarioById = async (req, res) => {
  const id_tipousuario = parseInt(req.params.id);
  const { tipo_nome } = req.body;
  const verificador = isEmpty([
    { tipo_nome: "Tipo Nome", valor: tipo_nome },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {

  const response = await db.query(
    "UPDATE TipoUsuario SET tipo_nome = $1 WHERE id_tipousuario = $2",
    [tipo_nome, id_tipousuario]
  );

  res.status(200).send({ message: "Tipo de Usuario atualizado com sucesso!" });
};
};

// ==> Método responsável por excluir um 'TipoUsuario' pelo 'Id':
exports.deleteTipoUsuarioById = async (req, res) => {
  const id_tipousuario = parseInt(req.params.id);
  await db.query("DELETE FROM tipoUsuario WHERE id_tipoUsuario = $1", [
    id_tipousuario,
  ]);

  res
    .status(200)
    .send({ message: "Tipo de Usuario deletado com sucesso!", id_tipousuario });
};
