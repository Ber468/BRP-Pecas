const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createFuncionario = async (req, res) => {
  const { nome, idade, salarioMensal } = req.body;
  const { rows } = await db.query(
    "INSERT INTO funcionario (nome, idade, salarioMensal) VALUES ($1, $2, $3)",
    [nome, idade, salarioMensal]
  );

  res.status(201).send({
    message: "Funcionario adicionado com sucesso!",
    body: {
      funcionario: { nome, idade, salarioMensal }
    },
  });
};

// ==> Método responsável por listar todos os 'Funcionarios':
exports.listAllFuncionario = async (req, res) => {
  const response = await db.query('SELECT * FROM funcionario ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Funcionarios' pelo 'Id':
exports.findFuncionarioById = async (req, res) => {
  const id_funcionario = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM funcionario WHERE id_funcionario = $1', [id_funcionario]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Funcionario' pelo 'Id':
exports.updateFuncionarioById = async (req, res) => {
  const id_funcionario = parseInt(req.params.id);
  const { nome, idade, salarioMensal } = req.body;

  const response = await db.query(
    "UPDATE funcionario SET nome = $1, idade = $2, salarioMensal = $3 WHERE id_funcionario = $4",
    [nome, idade, salarioMensal, id_funcionario]
  );

  res.status(200).send({ message: "Funcionario atualizado com sucesso!" });
};

// ==> Método responsável por excluir um 'Funcionario' pelo 'Id':
exports.deleteFuncionarioById = async (req, res) => {
  const id_funcionario = parseInt(req.params.id);
  await db.query('DELETE FROM funcionario WHERE id_funcionario = $1', [
    id_funcionario
  ]);

  res.status(200).send({ message: 'Funcionario deletado com sucesso!', id_funcionario });
};