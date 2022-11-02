import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VendaList from "./VendaList";
import VendaForm from "./VendaForm";
import VendaSrv from "./VendaSrv";
import UsuarioSrv from "../usuario/UsuarioSrv";
import ClienteSrv from "../cliente/ClienteSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

function VendaCont() {
  const [vendas, setVendas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [clientes, setClientes] = useState([]);

  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar();
    UsuarioSrv.listar()
      .then((response) => {
        setUsuarios(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Usuario Atualizado",
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
    ClienteSrv.listar()
      .then((response) => {
        setClientes(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Cliente Atualizado",
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
    VendaSrv.listar()
      .then((response) => {
        setVendas(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Vendas atualizadas",
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
    id_venda: null,
    data: "",
    valortotal: 0,
    id_usuario: 0,
    id_cliente: 0,
  };

  const [venda, setVenda] = useState(initialState);
  const [editando, setEditando] = useState(false);

  const inserir = () => {
    setVenda(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (venda.id_venda == null) {
      // inclussão

      VendaSrv.incluir(venda)
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
      VendaSrv.alterar(venda)
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

  const editar = (id_venda) => {
    setVenda(vendas.filter((venda) => venda.id_venda === id_venda)[0]);
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
    VendaSrv.excluir(id)
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
        <VendaList
          vendas={vendas}
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
        <VendaForm
          venda={venda}
          setVenda={setVenda}
          usuarios={usuarios}
          clientes={clientes}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default VendaCont;
