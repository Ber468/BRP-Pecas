const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createUsuario = async (req, res) => {
  const { nome, email, senha, id_tipoUsuario } = req.body;
  const verificador = isEmpty([
    { nome: "Nome", valor: nome},
    { nome: "Email", valor: email},
    { nome: "Senha", valor: senha},
    { nome: "Tipo de Usuario", valor: id_tipoUsuario},
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
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
};

// ==> Método responsável por listar todos os 'Usuarios':
exports.listAllUsuario = async (req, res) => {
  const response = await db.query('SELECT usuario.id_usuario, usuario.nome, usuario.email, usuario.senha,  tipoUsuario.tipo_nome as tipo_nome ' 
  +'from usuario  inner join tipoUsuario on usuario.id_tipoUsuario = tipoUsuario.id_tipoUsuario');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Usuarios' pelo 'Id':
exports.findUsuarioById = async (req, res) => {
  const id_usuario = parseInt(req.params.id);
  const response = await db.query
  ("SELECT usuario.nome, usuario.email, usuario.senha, tipoUsuario.tipo_nome as tipo_nome "  
  +"from usuario inner join tipoUsuario on usuario.id_tipoUsuario = tipoUsuario.id_tipoUsuario where id_usuario = $1", [id_usuario])
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Usuario' pelo 'Id':
exports.updateUsuarioById = async (req, res) => {
  const id_usuario = parseInt(req.params.id);
  const verificador = isEmpty([
    { nome: "Nome", valor: req.body.nome},
    { nome: "Email", valor: req.body.email},
    { nome: "Senha", valor: req.body.senha},
    { nome: "Tipo de Usuario", valor: req.body.id_tipoUsuario},
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { nome, email, senha, id_tipoUsuario } = req.body;

  const response = await db.query(
    "UPDATE usuario SET nome = $1, email = $2, senha = $3, id_tipoUsuario = $4 WHERE id_usuario = $5",
    [nome, email, senha, id_tipoUsuario, id_usuario]
  );

  res.status(200).send({ message: "Usuario atualizado com sucesso!" });
};
};

// ==> Método responsável por excluir um 'Usuario' pelo 'Id':
exports.deleteUsuarioById = async (req, res) => {
  const id_usuario = parseInt(req.params.id);
  await db.query('DELETE FROM usuario WHERE id_usuario = $1', [
    id_usuario
  ]);

  res.status(200).send({ message: 'Usuario deletado com sucesso!', id_usuario });
};