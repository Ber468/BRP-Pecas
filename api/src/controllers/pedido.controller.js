const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createPedido = async (req, res) => {
  const { descricao, data, id_fornecedor } = req.body;
  const verificador = isEmpty([
    { nome: "Descrição", valor: descricao },
    { nome: "Data", valor: data },
    { nome: "Id do Fornecedor", valor: id_fornecedor },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { rows } = await db.query(
    "INSERT INTO pedido (descricao, data, id_fornecedor) VALUES ($1, $2, $3)",
    [descricao, data, id_fornecedor]
  );

  res.status(201).send({
    message: "Pedido adicionado com sucesso!",
    body: {
      pedido: { descricao, data, id_fornecedor },
    },
  });
};
};

// ==> Método responsável por listar todos os 'Pedidos':
exports.listAllPedido = async (req, res) => {
  const response = await db.query(
    "SELECT pedido.id_pedido, pedido.descricao, pedido.data, fornecedor.nomefantasia as nomefantasia, pedido.id_fornecedor, " +
      "itempedido.prdvalor, itempedido.quantidade from pedido inner join fornecedor on pedido.id_fornecedor = fornecedor.id_fornecedor " +
      "left join itempedido on itempedido.id_pedido = pedido.id_pedido"
  );
  pedidos = response.rows.filter((pedido, index, self) => {
    return index === self.findIndex((t) => t.id_pedido === pedido.id_pedido);
  });
  response.rows.forEach((item) => {
    pedidos.forEach((pedido) => {
      if (pedido.id_pedido === item.id_pedido) {
        if (!pedido.itens) {
          pedido.itens = [];
        }
        pedido.itens.push({
          id: item.id,
          prdvalor: item.prdvalor,
          quantidade: item.quantidade,
        });
      }
    });
  });
  pedidos.forEach((pedido, index) => {
    pedidos[index].precoTotal = pedido.itens.reduce((a, b) => {
      return a + b.prdvalor * b.quantidade;
      }, 0);
      });
  res.status(200).send(pedidos.map((pedido) => ({...pedido, prdvalor: undefined, quantidade: undefined})));
};

// ==> Método responsável por selecionar 'Pedido' pelo 'Id':
exports.findPedidoById = async (req, res) => {
  const id_pedido = parseInt(req.params.id);
  const response = await db.query(
    "SELECT pedido.descricao, pedido.data, fornecedor.nomeFantasia as nomeFantasia " +
      "from pedido inner join fornecedor on pedido.id_fornecedor = fornecedor.id_fornecedor WHERE id_pedido = $1",
    [id_pedido]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Pedido' pelo 'Id':
exports.updatePedidoById = async (req, res) => {
  const id_pedido = parseInt(req.params.id);
  const { descricao, data, id_fornecedor } = req.body;
  const verificador = isEmpty([
    { nome: "Descrição", valor: descricao },
    { nome: "Data", valor: data },
    { nome: "Id do Fornecedor", valor: id_fornecedor },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {

  const response = await db.query(
    "UPDATE pedido SET descricao = $1, data = $2, id_fornecedor = $3 WHERE id_pedido = $4",
    [descricao, data, id_fornecedor, id_pedido]
  );

  res.status(200).send({ message: "Pedido atualizado com sucesso!" });
};
};

// ==> Método responsável por excluir uma 'Pedido' pelo 'Id':
exports.deletePedidoById = async (req, res) => {
  const id_pedido = parseInt(req.params.id);
  await db.query("DELETE FROM pedido WHERE id_pedido = $1", [id_pedido]);

  res.status(200).send({ message: "Pedido deletado com sucesso!", id_pedido });
};
