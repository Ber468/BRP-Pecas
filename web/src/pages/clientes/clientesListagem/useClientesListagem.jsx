import useGlobal from '../../../hooks/useGlobal';
import useClientes from '../../../hooks/useCliente';
import api from '../../../services/api';

export const useClientesListagem = () => {
  const { toggleLoading, handleErrors, toggleNotificacao } = useGlobal();
  const { setData } = useClientes();

  const listarClientes = async () => {
    toggleLoading(true);
    try {
      const res = await api.get('/cliente');
      if (res.data) {
        toggleLoading(false);

        setData(res.data);
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  const adicionarCliente = async (cliente) => {
    toggleLoading(true);
    try {
      const { status } = await api.post('/cliente', cliente);
      if (status === 200) {
        toggleLoading(false);
        toggleNotificacao({
          mensagem: 'Cliente adicionado com sucesso.',
        });
        listarClientes();
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  const editarCliente = async (cliente) => {
    toggleLoading(true);
    try {
      const { status } = await api.put('/cliente', cliente);
      if (status === 200) {
        toggleLoading(false);
        toggleNotificacao({
          mensagem: 'Cliente atualizado com sucesso.',
        });
        listarClientes();
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  const deletarCliente = async (id_cliente) => {
    toggleLoading(true);
    try {
      const { status } = await api.delete(`/cliente/${id_cliente}`);
      if (status === 200) {
        toggleLoading(false);
        toggleNotificacao({
          mensagem: 'Cliente excluído com sucesso.',
        });
        listarClientes();
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  const buscarClientePorId = async (id_cliente) => {
    toggleLoading(true);
    try {
      const res = await api.get(`/cliente/${id_cliente}`);
      if (res.data) {
        toggleLoading(false);
        return res.data;
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  return {
    listarClientes,
    buscarClientePorId,
    adicionarCliente,
    editarCliente,
    deletarCliente,
  };
};