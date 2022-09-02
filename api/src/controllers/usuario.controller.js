const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createUsuario = async (req, res) => {
  const { nome, email, senha, id_tipoUsuario } = req.body;
  const { rows } = await db.query(
    "INSERT INTO usuario (nome, email, senha, id_tipoUsuario) VALUES ($1, $2, $3, $4)",
    [nome, email, senha, id_tipoUsuario]
  );

  res.status(201).send({
    message: "Usuario adicionado com sucesso!",
    body: {
      usuario: { nome, email, senha, id_tipoUsuario }
    },
  });
};

// ==> Método responsável por listar todos os 'Usuarios':
exports.listAllUsuario = async (req, res) => {
  const response = await db.query('SELECT * FROM usuario ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Usuarios' pelo 'Id':
exports.findUsuarioById = async (req, res) => {
  const id_usuario = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM usuario WHERE id_usuario = $1', [id_usuario]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Usuario' pelo 'Id':
exports.updateUsuarioById = async (req, res) => {
  const id_usuario = parseInt(req.params.id);
  const { nome, email, senha, id_tipoUsuario } = req.body;

  const response = await db.query(
    "UPDATE usuario SET nome = $1, email = $2, senha = $3, id_tipoUsuario = $4 WHERE id_usuario = $5",
    [nome, email, senha, id_usuario, id_tipoUsuario]
  );

  res.status(200).send({ message: "Usuario atualizado com sucesso!" });
};

// ==> Método responsável por excluir um 'Usuario' pelo 'Id':
exports.deleteUsuarioById = async (req, res) => {
  const id_usuario = parseInt(req.params.id);
  await db.query('DELETE FROM usuario WHERE id_usuario = $1', [
    id_usuario
  ]);

  res.status(200).send({ message: 'Usuario deletado com sucesso!', id_usuario });
};