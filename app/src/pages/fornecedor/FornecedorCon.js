
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FornecedorList from "./FornecedorList";
import FornecedorForm from "./FornecedorForm";
import FornecedorSrv from "./FornecedorSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

function FornecedorCont() {
    const [fornecedores, setFornecedores] = useState([]);
    const toastRef = useRef();
    const initialState = {
        id_fornecedor: null,
        nomeFantasia: "",
        razaoSocial: "",
        cnpj: "",
    };
    const [fornecedor, setFornecedor] = useState(initialState);
    const [editando, setEditando] = useState(false);

    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);

    const onClickAtualizar = () => {
        FornecedorSrv.listar()
            .then((response) => {
                setFornecedores(response.data);
                toastRef.current.show({
                    severity: "success",
                    summary: "Fornecedores atualizados",
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
        setFornecedor(initialState);
    };

    const salvar = () => {
        if (fornecedor.id_fornecedor == null) {
            // inclussão

            FornecedorSrv.incluir(fornecedor)
                .then((response) => {
                    setEditando(false);
                    onClickAtualizar();
                    setFornecedor(initialState);

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
            FornecedorSrv.alterar(fornecedor)
                .then((response) => {
                    setEditando(false);
                    onClickAtualizar();
                    setFornecedor(initialState);

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

    const editar = (id_fornecedor) => {
        setFornecedor(fornecedores.filter((fornecedor) => fornecedor.id_fornecedor === id_fornecedor)[0]);
        setEditando(true);
    };

    const excluir = (id_fornecedor) => {
        confirmDialog({
            message: "Confirma a exclusão?",
            header: "Confirmação",
            icon: "pi pi-question",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            acceptClassName: "p-button-danger",
            accept: () => excluirConfirm(id_fornecedor),
        });
    };

    const excluirConfirm = (id_fornecedor) => {
        FornecedorSrv.excluir(id_fornecedor)
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
                <FornecedorList
                    fornecedores={fornecedores}
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
                <FornecedorForm
                    fornecedor={fornecedor}
                    setFornecedor={setFornecedor}
                    salvar={salvar}
                    cancelar={cancelar}
                />
                <Toast ref={toastRef} />
            </div>
        );
    }
}

export default FornecedorCont;