const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createTipoUsuario = async (req, res) => {
  const { descricao } = req.body;
  const { rows } = await db.query(
    "INSERT INTO tipoUsuario (descricao) VALUES ($1)",
    [descricao]
  );

  res.status(201).send({
    message: "Tipo de Usuario adicionado com sucesso!",
    body: {
      tipoUsuario: { descricao }
    },
  });
};

// ==> Método responsável por listar todos os 'Tipos de Usuarios':
exports.listAllTipoUsuario = async (req, res) => {
  const response = await db.query('SELECT * FROM tipoUsuario ORDER BY descricao ASC');
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
  const { descricao } = req.body;

  const response = await db.query(
    "UPDATE tipoUsuario SET descricao = $1 WHERE id_tipoUsuario = $2",
    [descricao, id_tipoUsuario]
  );

  res.status(200).send({ message: "Tipo de Usuario atualizado com sucesso!" });
};

// ==> Método responsável por excluir um 'TipoUsuario' pelo 'Id':
exports.deleteTipoUsuarioById = async (req, res) => {
  const id_tipoUsuario = parseInt(req.params.id);
  await db.query('DELETE FROM tipoUsuario WHERE id_tipoUsuario = $1', [
    id_tipoUsuario
  ]);

  res.status(200).send({ message: 'Tipo de Usuario deletado com sucesso!', id_tipoUsuario });
};