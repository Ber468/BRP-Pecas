const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createProduto = async (req, res) => {
  const { nome, precovenda, quantidadeestoque, id_tipoproduto } = req.body;
  const verificador = isEmpty([
    { nome: "Nome", valor: nome },
    { nome: "Preço de Venda", valor: precovenda },
    { nome: "Quantidade em Estoque", valor: quantidadeestoque },
    { nome: "Tipo de Produto", valor: id_tipoproduto },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { rows } = await db.query(
    "INSERT INTO produto (nome, precovenda, quantidadeestoque, id_tipoproduto) VALUES ($1, $2, $3, $4)",
    [nome, precovenda, quantidadeestoque, id_tipoproduto]
  );

  res.status(201).send({
    message: "Produto adicionado com sucesso!",
    body: {
      produto: { nome, precovenda, quantidadeestoque, id_tipoproduto },
    },
  });
};
};

// ==> Método responsável por listar todos os 'Produtos':
exports.listAllProduto = async (req, res) => {
  const response = await db.query(
    "SELECT produto.id_produto, produto.nome, produto.quantidadeestoque, produto.precovenda, tipoProduto.descricao " +
      "as descricao, produto.id_tipoproduto from produto inner join tipoProduto on produto.id_tipoproduto = tipoProduto.id_tipoproduto"
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Produto' pelo 'Id':
exports.findProdutoById = async (req, res) => {
  const id_produto = parseInt(req.params.id);
  const response = await db.query(
    "SELECT produto.nome, produto.quantidadeEstoque, produto.precoVenda, tipoProduto.descricao " +
      "as descricao from produto inner join tipoProduto on produto.id_tipoProduto = tipoProduto.id_tipoProduto WHERE id_produto = $1",
    [id_produto]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Produto' pelo 'Id':
exports.updateProdutoById = async (req, res) => {
  const id_produto = parseInt(req.params.id);
  const { nome, precovenda, quantidadeestoque, id_tipoproduto } = req.body;
  const verificador = isEmpty([
    { nome: "Nome", valor: req.body.nome },
    { nome: "Preço de Venda", valor: req.body.precovenda },
    { nome: "Quantidade em Estoque", valor: req.body.quantidadeestoque },
    { nome: "Tipo de Produto", valor: req.body.id_tipoproduto },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {

  const response = await db.query(
    "UPDATE produto SET nome = $1, precovenda = $2, quantidadeestoque = $3, id_tipoproduto = $4 WHERE id_produto = $5",
    [nome, precovenda, quantidadeestoque, id_tipoproduto, id_produto]
  );

  res.status(200).send({ message: "Produto atualizado com sucesso!" });
};
};

// ==> Método responsável por excluir uma 'Produto' pelo 'Id':
exports.deleteProdutoById = async (req, res) => {
  const id_produto = parseInt(req.params.id);
  await db.query("DELETE FROM produto WHERE id_produto = $1", [id_produto]);

  res
    .status(200)
    .send({ message: "Produto deletado com sucesso!", id_produto });
};
