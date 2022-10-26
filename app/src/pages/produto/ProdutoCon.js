import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProdutoList from "./ProdutoList";
import ProdutoForm from "./ProdutoForm";
import ProdutoSrv from "./ProdutoSrv";
import TipoProdutoSrv from "../tipoProduto/TipoProdutoSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

function ProdutoCont() {
  const [produtos, setProdutos] = useState([]);
  const [tipoProdutos, setTipoProdutos] = useState([]);

  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar();
    TipoProdutoSrv.listar()
      .then((response) => {
        setTipoProdutos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Tipo Produto Atualizado",
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
    ProdutoSrv.listar()
      .then((response) => {
        setProdutos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Produtos atualizados",
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
    id_produto: null,
    nome: "",
    precovenda: 0,
    quantidadeestoque: 0,
    id_tipoproduto: 0,
  };

  const [produto, setProduto] = useState(initialState);
  const [editando, setEditando] = useState(false);

  const inserir = () => {
    setProduto(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (produto.id_produto == null) {
      // inclussão

      ProdutoSrv.incluir(produto)
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
      ProdutoSrv.alterar(produto)
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

  const editar = (id_produto) => {
    setProduto(
      produtos.filter((produto) => produto.id_produto === id_produto)[0]
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
    ProdutoSrv.excluir(id)
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
        <ProdutoList
          produtos={produtos}
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
        <ProdutoForm
          produto={produto}
          setProduto={setProduto}
          tipoProdutos={tipoProdutos}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default ProdutoCont;
