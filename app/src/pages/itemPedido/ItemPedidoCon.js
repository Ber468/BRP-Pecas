import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemPedidoList from "./ItemPedidoList";
import ItemPedidoForm from "./ItemPedidoForm";
import ItemPedidoSrv from "./ItemPedidoSrv";
import PedidoSrv from "../pedido/PedidoSrv";
import ProdutoSrv from "../produto/ProdutoSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { useSearchParams } from "react-router-dom";

function ItemPedidoCont() {
  const [itemPedidos, setItemPedidos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [URLSearchParams] = useSearchParams();

  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar();
    PedidoSrv.listar()
      .then((response) => {
        setPedidos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Pedido Atualizado",
          life: 3000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  }, []);

  useEffect(() => {
    onClickAtualizar();
    ProdutoSrv.listar()
      .then((response) => {
        setProdutos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Produto Atualizado",
          life: 3000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  }, []);

  const onClickAtualizar = () => {
    const id = URLSearchParams.get("id");
    ItemPedidoSrv.listar(id)
      .then((response) => {
        setItemPedidos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Itens Pedidos atualizadas",
          life: 3000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

  const initialState = {
    id_itempedido: null,
    quantidade: 0,
    id_pedido: Number(URLSearchParams.get("id")),
    id_produto: 0,
  };

  const [itemPedido, setItemPedido] = useState(initialState);
  const [editando, setEditando] = useState(false);

  const inserir = () => {
    setItemPedido(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (itemPedido.id_itempedido == null) {
      // inclussão

      ItemPedidoSrv.incluir(itemPedido)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();

          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    } else {
      // alteração
      ItemPedidoSrv.alterar(itemPedido)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();

          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    }
  };

  const cancelar = () => {
    setEditando(false);
  };

  const editar = (id_itempedido) => {
    setItemPedido(
      itemPedidos.filter(
        (itemPedido) => itemPedido.id_itempedido === id_itempedido
      )[0]
    );
    setEditando(true);
  };

  const excluir = (id) => {
    confirmDialog({
      message: "Confirma a exclusão?",
      header: "Confirmação",
      icon: "pi pi-question",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      acceptClassName: "p-button-danger",
      accept: () => excluirConfirm(id),
    });
  };

  const excluirConfirm = (id) => {
    ItemPedidoSrv.excluir(id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído",
          life: 2000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 4000,
        });
      });
  };

  if (!editando) {
    return (
      <div className="App">
        <ConfirmDialog />
        <ItemPedidoList
          itemPedidos={itemPedidos}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />

        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <ItemPedidoForm
          itemPedido={itemPedido}
          setItemPedido={setItemPedido}
          pedidos={pedidos}
          produtos={produtos}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default ItemPedidoCont;
