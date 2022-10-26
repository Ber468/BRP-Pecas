import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PedidoList from "./PedidoList";
import PedidoForm from "./PedidoForm";
import PedidoSrv from "./PedidoSrv";
import FornecedorSrv from "../fornecedor/FornecedorSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

function PedidoCont() {
  const [pedidos, setPedidos] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);

  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar();
    FornecedorSrv.listar()
      .then((response) => {
        setFornecedores(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Fornecedor Atualizado",
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
    PedidoSrv.listar()
      .then((response) => {
        setPedidos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Pedidos atualizados",
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
    id_pedido: null,
    descricao: "",
    data: "",
    id_fornecedor: 0,
  };

  const [pedido, setPedido] = useState(initialState);
  const [editando, setEditando] = useState(false);

  const inserir = () => {
    setPedido(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (pedido.id_pedido == null) {
      // inclussão

      PedidoSrv.incluir(pedido)
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
      PedidoSrv.alterar(pedido)
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

  const editar = (id_pedido) => {
    setPedido(pedidos.filter((pedido) => pedido.id_pedido === id_pedido)[0]);
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
    PedidoSrv.excluir(id)
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
        <PedidoList
          pedidos={pedidos}
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
        <PedidoForm
          pedido={pedido}
          setUsuario={setPedido}
          fornecedores={fornecedores}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default PedidoCont;
