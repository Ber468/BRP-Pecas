import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import useCliente from '../useCliente';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

export const AdicionarEditarCliente = ({ adicionarEditarCliente, setAdicionarEditarCliente }) => {
    const { adicionarCliente, editarCliente } = useCliente();

    const callBackSucesso = useCallback(() => {
        setAdicionarEditarCliente({ open: false });
    }, [setAdicionarEditarCliente]);

    const _handleSubmit = (values) => {
        if (adicionarEditarCliente.cliente) {
            editarCliente({ id_cliente: adicionarEditarCliente.cliente.id_cliente, ...values }, callBackSucesso);
        } else {
            adicionarCliente(values, callBackSucesso);
        }
    };

    const _initialValues = useMemo(() => {
        const cliente = adicionarEditarCliente.cliente;

        if (adicionarEditarCliente.cliente) return cliente;
        return {};
    }, [adicionarEditarCliente.cliente]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: _initialValues });

    return (
        <Dialog
            header="Adicionar Cliente"
            visible={adicionarEditarCliente.open}
            style={{ width: "50vw" }}
            onHide={() => setAdicionarEditarCliente({ open: false })}
        >
            <form
            style={{ display: "flex", flexDirection: "column", gap: '16px' }}
            defaultValue={_initialValues}
            onSubmit={handleSubmit(_handleSubmit)}
            >
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label>Nome*</label>
                    <InputText
                    className="form-control"
                    type="text"
                    name="nome"
                    {...register('nome', {
                         required: {
                            value: true,
                            message: 'O nome é obrigatório',
                         },
                         maxLength: {
                            value: 50,
                            message: 'O nome deve ter no máximo 50 caracteres',
                         },
                         minLength: {
                            value: 2,
                            message: 'O nome deve ter no mínimo 2 caracteres',
                         },
                        })}
                        />
                        <div>{errors.nome && <Message severity="error" text={errors?.nome?.message}></Message>}</div>
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label>Endereco*</label>
                    <InputText
                    className="form-control"
                    type="text"
                    name="endereco"
                    {...register('endereco', {
                            required: { value: true, message: 'O endereço é obrigatório' },
                            maxLength: { value: 100, message: 'O endereço deve ter no máximo 100 caracteres' },
                            minLength: { value: 10, message: 'O endereço deve ter no mínimo 10 caracteres' },
                        })}
                        />
                        <div>{errors.endereco && <Message severity="error" text={errors?.endereco?.message}></Message>}</div>
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label>CPF*</label>
                    <InputText
                    className="form-control"
                    type="text"
                    name="cpf"
                    {...register('cpf', {
                            required: { value: true, message: 'O CPF é obrigatório' },
                            maxLength: { value: 11, message: 'O CPF deve ter no máximo 11 caracteres' },
                            minLength: { value: 11, message: 'O CPF deve ter no mínimo 11 caracteres' },
                        })}
                        />
                        <div>{errors.cpf && <Message severity="error" text={errors?.cpf?.message}></Message>}</div>
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label>Telefone*</label>
                    <InputText
                    className="form-control"
                    type="number"
                    name="telefone"
                    {...register('telefone', {
                            required: { value: true, message: 'O telefone é obrigatório' },
                            maxLength: { value: 11, message: 'O telefone deve ter no máximo 11 caracteres' },
                            minLength: { value: 11, message: 'O telefone deve ter no mínimo 11 caracteres' },
                        })}
                        />
                        <div>{errors.telefone && <Message severity="error" text={errors?.telefone?.message}></Message>}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        label="Cancelar"
                        icon="pi pi-times"
                        onClick={() => setAdicionarEditarCliente({ open: false })}
                        className="p-button-text"
                    />
                    <Button label="Confirmar" icon="pi pi-check" type="submit" autoFocus />
                </div>
            </form>
        </Dialog>
    );
};

export default AdicionarEditarCliente;


    