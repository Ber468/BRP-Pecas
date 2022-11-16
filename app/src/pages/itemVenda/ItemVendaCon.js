import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemVendaList from "./ItemVendaList";
import ItemVendaForm from "./ItemVendaForm";
import ItemVendaSrv from "./ItemVendaSrv";
import VendaSrv from "../venda/VendaSrv";
import ProdutoSrv from "../produto/ProdutoSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

function ItemVendaCont() {
  const [itemVendas, setItemVendas] = useState([]);
  const [vendas, setVendas] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar();
    VendaSrv.listar()
      .then((response) => {
        setVendas(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Venda Atualizada",
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
    ItemVendaSrv.listar()
      .then((response) => {
        setItemVendas(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Itens Vendas atualizadas",
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
    id_itemvenda: null,
    valor: 0,
    id_venda: 0,
    id_produto: "",
  };

  const [itemvenda, setItemVenda] = useState(initialState);
  const [editando, setEditando] = useState(false);

  const inserir = () => {
    setItemVenda(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (itemvenda.id_itemvenda == null) {
      // inclussão

      ItemVendaSrv.incluir(itemvenda)
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
      ItemVendaSrv.alterar(itemvenda)
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

  const editar = (id_itemvenda) => {
    setItemVenda(
      itemVendas.filter(
        (itemvenda) => itemvenda.id_itemvenda === id_itemvenda
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
    ItemVendaSrv.excluir(id)
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
        <ItemVendaList
          itemVendas={itemVendas}
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
        <ItemVendaForm
          itemVendas={itemVendas}
          setItemVenda={setItemVenda}
          vendas={vendas}
          produtos={produtos}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default ItemVendaCont;
