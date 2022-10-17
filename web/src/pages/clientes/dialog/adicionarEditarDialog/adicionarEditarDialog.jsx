/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useClientesListagem } from '../../clientesListagem/useClientesListagem';
import useClientes from '../../../../hooks/useCliente';
import useAdicionarEditarDialog from './useAdicionarEditarDialog';

const AdicionarEditarDialog = () => {
  const { buscarClientePorId } = useClientesListagem();
  const { register, handleSubmit, setValue } = useForm();
  const { adicionarEditarDialog } = useClientes();

  const { onSubmit, handleClose } = useAdicionarEditarDialog();

  const _buscarClientePorId = async (id_cliente) => {
    const { nome, endereco, cpf, telefone } = await buscarClientePorId(id_cliente);
    setValue('nome', nome);
    setValue('endereco', endereco);
    setValue('cpf', cpf);
    setValue('telefone', telefone);
  };

  React.useEffect(() => {
    if (adicionarEditarDialog.codigo) {
      _buscarClientePorId(adicionarEditarDialog.codigo);
    }
  }, [adicionarEditarDialog]);

  return (
    <Dialog open={adicionarEditarDialog.open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          {adicionarEditarDialog.codigo ? 'Editar cliente' : 'Adicionar cliente'}
        </DialogTitle>
        <DialogContent>
          <TextField
            {...register('nome')}
            autoFocus
            margin="dense"
            label="Nome"
            type="text"
            fullWidth
            variant="filled"
            autoComplete="off"
            required
          />
          <TextField
            {...register('endereco')}
            margin="dense"
            label="Endereço"
            type="text"
            fullWidth
            variant="filled"
            autoComplete="off"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            {...register('cpf')}
            autoFocus
            margin="dense"
            label="CPF"
            type="text"
            fullWidth
            variant="filled"
            autoComplete="off"
            required
          />
          </DialogContent>
          <DialogContent>
          <TextField
            {...register('telefone')}
            autoFocus
            margin="dense"
            label="Telefone"
            type="text"
            fullWidth
            variant="filled"
            autoComplete="off"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AdicionarEditarDialog;