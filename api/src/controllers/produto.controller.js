const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createProduto = async (req, res) => {
  const { nome, precoVenda, quantidadeEstoque, id_tipoProduto } = req.body;
  const { rows } = await db.query(
    "INSERT INTO produto (nome, precoVenda, quantidadeEstoque, id_tipoProduto) VALUES ($1, $2, $3, $4)",
    [nome, precoVenda, quantidadeEstoque, id_tipoProduto]
  );

  res.status(201).send({
    message: "Produto adicionado com sucesso!",
    body: {
      produto: { nome, precoVenda, quantidadeEstoque, id_tipoProduto }
    },
  });
};

// ==> Método responsável por listar todos os 'Produtos':
exports.listAllProduto = async (req, res) => {
  const response = await db.query('SELECT produto.id_produto, produto.nome, produto.quantidadeEstoque, produto.precoVenda, tipoProduto.descricao ' 
  +'as descricao from produto inner join tipoProduto on produto.id_tipoProduto = tipoProduto.id_tipoProduto');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Produto' pelo 'Id':
exports.findProdutoById = async (req, res) => {
  const id_produto = parseInt(req.params.id);
  const response = await db.query('SELECT produto.nome, produto.quantidadeEstoque, produto.precoVenda, tipoProduto.descricao ' 
  + 'as descricao from produto inner join tipoProduto on produto.id_tipoProduto = tipoProduto.id_tipoProduto WHERE id_produto = $1', [id_produto]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Produto' pelo 'Id':
exports.updateProdutoById = async (req, res) => {
  const id_produto = parseInt(req.params.id);
  const { nome, precoVenda, quantidadeEstoque, id_tipoProduto } = req.body;

  const response = await db.query(
    "UPDATE produto SET nome = $1, precoVenda = $2, quantidadeEstoque = $3, id_tipoProduto = $4 WHERE id_produto = $5",
    [nome, precoVenda, quantidadeEstoque, id_tipoProduto, id_produto]
  );

  res.status(200).send({ message: "Produto atualizado com sucesso!" });
};

// ==> Método responsável por excluir uma 'Produto' pelo 'Id':
exports.deleteProdutoById = async (req, res) => {
  const id_produto = parseInt(req.params.id);
  await db.query('DELETE FROM produto WHERE id_produto = $1', [
    id_produto
  ]);

  res.status(200).send({ message: 'Produto deletado com sucesso!', id_produto });
};