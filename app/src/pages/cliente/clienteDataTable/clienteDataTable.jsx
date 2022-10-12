import { useEffect, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Button } from "primereact/button";

import useCliente from '../useCliente';
import useClienteContext from '../../../hooks/useCliente';
import { HeaderWithSearch } from "./clienteDataTable.static";
import AdicionarEditarCliente from '../dialogs/adicionarEditarCliente';

export const ClienteDataTable = () => {
    const { filtrosDataTable, cliente } = useClienteContext();
    const { buscarCliente, deletarCliente } = useCliente();

    const [confirmarExclusao, setConfirmarExclusao] = useState({ open: false });
    const [adicionarEditarCliente, setAdicionarEditarCliente] = useState({ open: false });

    useEffect(() => {
        if (cliente.length === 0) {
            buscarCliente();
        }
    }, [buscarCliente, cliente.length]);

    return (
        <>
        <DataTable
            paginator
            responsiveLayout="scroll"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            rows={5}
            selectionMode="single"
            header={HeaderWithSearch({ setAdicionarEditarCliente })}
            filters={filtrosDataTable}
            rowsPerPageOptions={[5, 10, 20]}
            paginatorLeft={<></>}
            paginatorRight={<></>}
            emptyMessage="Nenhum cliente encontrado"
            value={
                cliente?.map((cliente, index) => ({
                    id_cliente: cliente.id_cliente,
                    position: index + 1,
                    nome: cliente.nome,
                    endereco: cliente.endereco,
                    cpf: cliente.cpf,
                    telefone: cliente.telefone,
                    actions: (
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <Button
                                type="button"
                                icon="pi pi-pencil"
                                label="Editar"
                                className="p-button-outlined p-button-warning"
                                onClick={() => setAdicionarEditarCliente({ open: true, cliente })}
                            />
                            <Button
                                type="button"
                                icon="pi pi-times"
                                label="Excluir"
                                className="p-button-outlined p-button-danger"
                                onClick={() => setConfirmarExclusao({ open: true, id_cliente: cliente.id_cliente })}
                            />
                        </div>
                    ),
                })) ?? []
            }
        >
            <Column field="position" header="Posição" sortable></Column>
            <Column field="name" header="Nome" sortable></Column>
            <Column field="endereco" header="Endereço" sortable></Column>
            <Column field="cpf" header="CPF" sortable></Column>
            <Column field="telefone" header="Telefone" sortable></Column>
            <Column field="actions" header="Ações" align="right"></Column>
        </DataTable>
        {confirmarExclusao.open && (
            <ConfirmDialog
                visible={confirmarExclusao.open}
                onHide={() => setConfirmarExclusao({ open: false })}
                message="Tem certeza que deseja excluir este cliente?"
                header="Confirmação"
                icon="pi pi-question"
                accept={() => deletarCliente(confirmarExclusao.id_cliente)}
                />
        )}
        {adicionarEditarCliente.open && (
            <AdicionarEditarCliente
                adicionarEditarCliente={adicionarEditarCliente}
                setAdicionarEditarCliente={setAdicionarEditarCliente}
            />
        )}
        </>
    );
};

export default ClienteDataTable;