import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const TipoUsuarioForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setTipoUsuario({ ...props.tipoUsuario, [name]: value });
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        props.salvar();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ padding: 20 }}>
                <div className="card">
                    <h5>Cadastro de Tipos de Usuários</h5>
                    <div style={{marginLeft:"40%"}}>
                        <div className="p-fluid grid formgrid">
                            <div className="field col-12  md:col-4">
                                <label htmlFor="tipo_nome">Tipo Nome</label>
                                <InputText
                                    name="tipo_nome"
                                    {...register("tipo_nome", {
                                        required: {
                                            value: true,
                                            message: "Tipo Nome é Campo obrigatório!",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Tipo Nome deve ter no máximo 50 caracteres!",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Tipo Nome deve ter no mínimo 2 caracteres!",
                                        },
                                    })}
                                    defaultValue={props.tipoUsuario.tipo_nome}
                                    onChange={handleInputChange}
                                />
                                {errors.tipo_nome && (
                                    <span style={{ color: "red" }}>{errors.tipo_nome.message}</span>
                                )}
                            </div>
                            </div>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    icon="pi pi-pencil"
                                    className="p-button-rounded p-button-text "
                                    label="Salvar"
                                ></Button>
                                <Button
                                    type="button"
                                    icon="pi pi-trash"
                                    className="p-button-rounded p-button-text"
                                    label="Cancelar"
                                    onClick={props.cancelar}
                                ></Button>
                                </div>
                            </div>
                        </div>
            </form>
        );
    };

                    export default TipoUsuarioForm;