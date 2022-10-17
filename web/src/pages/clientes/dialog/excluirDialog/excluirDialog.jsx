import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useClientesListagem } from '../../clientesListagem/useClientesListagem';
import useClientes from '../../../../hooks/useCliente';

const ExcluirDialog = () => {
  const { deletarClientes } = useClientesListagem();
  const { excluirDialog, setExcluirDialog } = useClientes();

  const _handleClose = () => {
    setExcluirDialog({ open: false });
  };
  const _handleSubmit = () => {
    deletarClientes(excluirDialog.codigo);
    _handleClose();
  };

  return (
    <Dialog open={excluirDialog.open} onClose={_handleClose}>
      <DialogTitle>Excluir cliente?</DialogTitle>
      <DialogContent>
        Você tem certeza que deseja excluir o cliente selecionado? <b>{excluirDialog.nome}</b>?
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={_handleClose}>
          Cancelar
        </Button>
        <Button variant="contained" color="error" onClick={_handleSubmit}>
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExcluirDialog;