import React from "react";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
// import  InputMask  from "react-input-mask";

const ClienteForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setCliente({ ...props.cliente, [name]: value });
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
                    <h5>Cadastro de Clientes</h5>
                    <div style={{ marginLeft: "33em" }}>
                        <div className="p-fluid grid formgrid">
                            <div className="field col-12  md:col-4">
                                <label htmlFor="nome">Nome</label>
                                <InputText
                                    name="nome"
                                    {...register("nome", {
                                        required: {
                                            value: true,
                                            message: "Nome é Campo obrigatório!",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Nome deve ter no máximo 50 caracteres!",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Nome deve ter no mínimo 2 caracteres!",
                                        },
                                    })}
                                    defaultValue={props.cliente.nome}
                                    onChange={handleInputChange}
                                />
                                {errors.nome && (
                                    <span style={{ color: "red" }}>{errors.nome.message}</span>
                                )}
                            </div>
                            </div>
                            <div className="p-fluid grid formgrid">
                            <div className="field col-12  md:col-4">
                                <label htmlFor="endereco">Endereço</label>
                                <InputText
                                    name="endereco"
                                    {...register("endereco", {
                                        required: {
                                            value: true,
                                            message: "Endereço é Campo obrigatório!",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Endereço deve ter no máximo 50 caracteres!",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Endereço deve ter no mínimo 2 caracteres!",
                                        },
                                    })}
                                    defaultValue={props.cliente.endereco}
                                    onChange={handleInputChange}
                                />
                                {errors.endereco && (
                                    <span style={{ color: "red" }}>{errors.endereco.message}</span>
                                )}
                            </div>
                            </div>
                            <div className="p-fluid grid formgrid">
                            <div className="field col-12  md:col-4">
                                <label htmlFor="cpf">CPF</label>
                                <InputMask
                                    name="cpf"
                                    mask="999.999.999-99"
                                    defaultValue={props.cliente.cpf}
                                    onChange={handleInputChange}
                                />
                                {errors.cpf && (
                                    <span style={{ color: "red" }}>{errors.cpf.message}</span>
                                )}
                            </div>
                            </div>
                            <div className="p-fluid grid formgrid">
                            <div className="field col-12  md:col-4">
                                <label htmlFor="telefone">Telefone</label>
                                <InputMask
                                    name="telefone"
                                    mask="(99) 99999-9999"
                                    defaultValue={props.cliente.telefone}
                                    onChange={handleInputChange}
                                />
                                {errors.telefone && (
                                    <span style={{ color: "red" }}>{errors.telefone.message}</span>
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

                    export default ClienteForm;
                            