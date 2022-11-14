import useClientes from '../../../../hooks/useCliente';
import { useClientesListagem } from '../../clientesListagem/useClientesListagem';

const useAdicionarEditarDialog = () => {
  const { setAdicionarEditarDialog, adicionarEditarDialog } = useClientes();
  const { adicionarCliente, editarCliente } = useClientesListagem();

  const handleClose = () => {
    setAdicionarEditarDialog({ open: false });
  };

  const onSubmit = (values) => {
    if (adicionarEditarDialog.codigo) {
      editarCliente({
        _id: adicionarEditarDialog.codigo,
        ...values,
      });
    } else {
      adicionarCliente(values);
    }

    handleClose();
  };

  return {
    onSubmit,
    handleClose,
  };
};

export default useAdicionarEditarDialog;