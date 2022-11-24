const db = require("../config/database");
const isEmpty = require("../validation/isEmpty");

// ==> Método responsável por criar um novo 'Product':

exports.createVenda = async (req, res) => {
  const { data, valortotal, id_usuario, id_cliente } = req.body;
  const verificador = isEmpty([
    { data: "Data", valor: data },
    { data: "Valor Total", valor: valortotal },
    { data: "Id do Usuário", valor: id_usuario },
    { data: "Id do Cliente", valor: id_cliente },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {
  const { rows } = await db.query(
    "INSERT INTO venda (data, valortotal, id_usuario, id_cliente) VALUES ($1, $2, $3, $4)",
    [data, valortotal, id_usuario, id_cliente]
  );

  res.status(201).send({
    message: "Venda adicionado com sucesso!",
    body: {
      venda: { data, valortotal, id_usuario, id_cliente },
    },
  });
};
};

// ==> Método responsável por listar todas as 'Vendas':
exports.listAllVenda = async (req, res) => {
  let vendas = [];
  const response = await db.query(
    "SELECT venda.id_venda, venda.data, usuario.nome_usuario as usuario, itemvenda.prdpreco, itemvenda.quantidade, " +
      "cliente.nome as cliente  from venda inner join usuario on venda.id_usuario = usuario.id_usuario " +
      "inner join cliente on venda.id_cliente = cliente.id_cliente inner join itemvenda on itemvenda.id_venda = venda.id_venda"
  );
  vendas = response.rows.filter((venda, index, self) => {
    return index === self.findIndex((t) => t.id_venda === venda.id_venda);
  });
  response.rows.forEach((item) => {
    vendas.forEach((venda) => {
      if (venda.id_venda === item.id_venda) {
        if (!venda.itens) {
          venda.itens = [];
        }
        venda.itens.push({
          id: item.id,
          prdpreco: item.prdpreco,
          quantidade: item.quantidade,
        });
      }
    });
  });
  vendas.forEach((venda, index) => {
    vendas[index].valorTotal = venda.itens.reduce((a, b) => {
      return a + b.prdpreco * b.quantidade;
    }, 0);
  });
  res.status(200).send(vendas.map((venda) => ({ ...venda, prdpreco: undefined, quantidade: undefined })));
};

// ==> Método responsável por selecionar 'Venda' pelo 'Id':
exports.findVendaById = async (req, res) => {
  const id_venda = parseInt(req.params.id);
  const response = await db.query(
    "SELECT venda.data, venda.valorTotal, usuario.nome_usuario as usuario, cliente.nome as cliente from venda " +
      "inner join usuario on venda.id_venda = usuario.id_usuario inner join cliente on venda.id_venda = cliente.id_cliente " +
      "WHERE id_venda = $1",
    [id_venda]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Venda' pelo 'Id':
exports.updateVendaById = async (req, res) => {
  const id_venda = parseInt(req.params.id);
  const { data, valorTotal, id_usuario, id_cliente } = req.body;
  const verificador = isEmpty([
    { data: "Data", valor: data },
    { data: "Valor Total", valor: valorTotal },
    { data: "Id do Usuário", valor: id_usuario },
    { data: "Id do Cliente", valor: id_cliente },
  ]);
  if (verificador) {
    res.status(500).send({
      message: verificador,
    });
  } else {

  const response = await db.query(
    "UPDATE venda SET data = $1, valorTotal = $2, id_usuario = $3, id_cliente = $4 WHERE id_venda = $5",
    [data, valorTotal, id_usuario, id_cliente, id_venda]
  );

  res.status(200).send({ message: "Venda atualizada com sucesso!" });
};
};

// ==> Método responsável por excluir uma 'Venda' pelo 'Id':
exports.deleteVendaById = async (req, res) => {
  const id_venda = parseInt(req.params.id);
  await db.query("DELETE FROM venda WHERE id_venda = $1", [id_venda]);

  res.status(200).send({ message: "Venda deletada com sucesso!", id_venda });
};
