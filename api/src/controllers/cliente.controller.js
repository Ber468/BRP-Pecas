const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createCliente = async (req, res) => {
  const { nome, endereco, cpf, telefone } = req.body;
  const { rows } = await db.query(
    "INSERT INTO cliente (nome, endereco, cpf, telefone) VALUES ($1, $2, $3, $4)",
    [nome, endereco, cpf, telefone ]
  );

  res.status(201).send({
    message: "Cliente adicionado com sucesso!",
    body: {
      cliente: { nome, endereco, cpf, telefone }
    },
  });
};

// ==> Método responsável por listar todos os 'Clientes':
exports.listAllCliente = async (req, res) => {
  const response = await db.query('SELECT * FROM cliente ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Cliente' pelo 'Id':
exports.findClienteById = async (req, res) => {
  const id_cliente = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM cliente WHERE id_cliente = $1', [id_cliente]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Cliente' pelo 'Id':
exports.updateClienteById = async (req, res) => {
  const id_cliente = parseInt(req.params.id);
  const { nome, endereco, cpf, telefone } = req.body;

  const response = await db.query(
    "UPDATE cliente SET nome = $1, endereco = $2, cpf = $3, telefone = $4 WHERE id_cliente = $5",
    [nome, endereco, cpf, telefone, id_cliente]
  );

  res.status(200).send({ message: "Cliente atualizado com sucesso!" });
};

// ==> Método responsável por excluir uma 'Cliente' pelo 'Id':
exports.deleteClienteById = async (req, res) => {
  const id_cliente = parseInt(req.params.id);
  await db.query('DELETE FROM cliente WHERE id_cliente = $1', [
    id_cliente
  ]);

  res.status(200).send({ message: 'Cliente deletado com sucesso!', id_cliente });
};