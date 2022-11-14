import React, { useMemo } from 'react';

import { useClientesListagem } from './useClientesListagem';
import DataTable from '../../../components/dataTable/dataTable';
import { MdOutlineEdit, MdOutlineCancel, MdAdd } from 'react-icons/md';

import AdicionarEditarDialog from '../dialog/adicionarEditarDialog/adicionarEditarDialog';
import ExcluirDialog from '../dialog/excluirDialog/excluirDialog';
import useCliente from '../../../hooks/useCliente';

const ClientesListagem = () => {
  const { listarClientes } = useClientesListagem();
  const {
    setAdicionarEditarDialog,
    setExcluirDialog,
    adicionarEditarDialog,
    excluirDialog,
    data,
  } = useCliente();

  React.useEffect(() => {
    if (data === null) {
      listarClientes();
    }
  }, [data, listarClientes]);

  const columns = ['Nome', 'Endereço', 'CPF', 'Telefone'];

  const rows = useMemo(() => {
    if (data) {
      return data.map((it) => {
        return {
          nome: it.nome,
          endereco: it.endereco,
          cpf: it.cpf,
          telefone: it.telefone,
          actions: [
            {
              label: 'Editar',
              icon: <MdOutlineEdit size={16} />,
              action: () => setAdicionarEditarDialog({ open: true, codigo: it.id_cliente }),
            },
            {
              label: 'Excluir',
              icon: <MdOutlineCancel size={16} />,
              action: () =>
                setExcluirDialog({
                  open: true,
                  codigo: it.id_cliente,
                  titulo: it.nome,
                }),
            },
          ],
        };
      });
    }
    return [];
  }, [data, setAdicionarEditarDialog, setExcluirDialog]);

  return (
    <>
      <DataTable
        columns={columns}
        rows={rows}
        fab={{
          label: 'Novo Cliente',
          icon: <MdAdd size={24} />,
          onClick: () => setAdicionarEditarDialog({ open: true }),
        }}
      />
      {adicionarEditarDialog?.open && <AdicionarEditarDialog />}
      {excluirDialog?.open && <ExcluirDialog />}
    </>
  );
};

export default ClientesListagem;