
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TipoUsuarioList from "./TipoUsuarioList";
import TipoUsuarioForm from "./TipoUsuarioForm";
import TipoUsuarioSrv from "./TipoUsuarioSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

function TipoUsuarioCont() {
    const [tipoUsuarios, setTipoUsuarios] = useState([]);
    const toastRef = useRef();
    const initialState = {
        id_tipousuario: null,
        tipo_nome: "",
    };
    const [tipoUsuario, setTipoUsuario] = useState(initialState);
    const [editando, setEditando] = useState(false);

    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);

    const onClickAtualizar = () => {
        TipoUsuarioSrv.listar()
            .then((response) => {
                setTipoUsuarios(response.data);
                toastRef.current.show({
                    severity: "success",
                    summary: "Tipos Usuarios atualizados",
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
        setTipoUsuario(initialState);
    };

    const salvar = () => {
        if (tipoUsuario.id_tipousuario == null) {
            // inclussão

            TipoUsuarioSrv.incluir(tipoUsuario)
                .then((response) => {
                    setEditando(false);
                    onClickAtualizar();
                    setTipoUsuario(initialState);

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
            TipoUsuarioSrv.alterar(tipoUsuario)
                .then((response) => {
                    setEditando(false);
                    onClickAtualizar();
                    setTipoUsuario(initialState);

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

    const editar = (id_tipousuario) => {
        setTipoUsuario(tipoUsuarios.filter((tipoUsuario) => tipoUsuario.id_tipousuario === id_tipousuario)[0]);
        setEditando(true);
    };

    const excluir = (id_tipousuario) => {
        confirmDialog({
            message: "Confirma a exclusão?",
            header: "Confirmação",
            icon: "pi pi-question",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            acceptClassName: "p-button-danger",
            accept: () => excluirConfirm(id_tipousuario),
        });
    };

    const excluirConfirm = (id_tipousuario) => {
        TipoUsuarioSrv.excluir(id_tipousuario)
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
                <TipoUsuarioList
                    tipoUsuarios={tipoUsuarios}
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
                <TipoUsuarioForm
                    tipoUsuario={tipoUsuario}
                    setTipoUsuario={setTipoUsuario}
                    salvar={salvar}
                    cancelar={cancelar}
                />
                <Toast ref={toastRef} />
            </div>
        );
    }
}

export default TipoUsuarioCont;