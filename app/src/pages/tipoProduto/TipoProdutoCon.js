import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TipoProdutoList from "./TipoProdutoList";
import TipoProdutoForm from "./TipoProdutoForm";
import TipoProdutoSrv from "./TipoProdutoSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

function TipoProdutoCont() {
  const [tipoProdutos, setTipoProdutos] = useState([]);
  const toastRef = useRef();
  const initialState = {
    id_tipoproduto: null,
    descricao: "",
  };
  const [tipoProduto, setTipoProduto] = useState(initialState);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);

  const onClickAtualizar = () => {
    TipoProdutoSrv.listar()
      .then((response) => {
        setTipoProdutos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Tipos Produtos atualizados",
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

  const inserir = () => {
    setEditando(true);
  };

  const cancelar = () => {
    console.log("Cancelou ...");
    setEditando(false);
    setTipoProduto(initialState);
  };

  const salvar = () => {
    if (tipoProduto.id_tipoproduto == null) {
      // inclussão

      TipoProdutoSrv.incluir(tipoProduto)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          setTipoProduto(initialState);

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
      TipoProdutoSrv.alterar(tipoProduto)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          setTipoProduto(initialState);

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

  const editar = (id_tipoproduto) => {
    setTipoProduto(
      tipoProdutos.filter(
        (tipoProduto) => tipoProduto.id_tipoproduto === id_tipoproduto
      )[0]
    );
    setEditando(true);
  };

  const excluir = (id_tipoproduto) => {
    confirmDialog({
      message: "Confirma a exclusão?",
      header: "Confirmação",
      icon: "pi pi-question",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      acceptClassName: "p-button-danger",
      accept: () => excluirConfirm(id_tipoproduto),
    });
  };

  const excluirConfirm = (id_tipoproduto) => {
    TipoProdutoSrv.excluir(id_tipoproduto)
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
        <Toast ref={toastRef} />
        <ConfirmDialog />
        <TipoProdutoList
          tipoProdutos={tipoProdutos}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
          onClickAtualizar={onClickAtualizar}
        />

        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <TipoProdutoForm
          tipoProduto={tipoProduto}
          setTipoProduto={setTipoProduto}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default TipoProdutoCont;
