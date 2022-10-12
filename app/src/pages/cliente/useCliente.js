import { useHelper } from '../../Services/api';
import useApp from '../../hooks/useApp';
import useCliente from '../../hooks/useCliente';

const useClienteHook = () => {
    const { toastRef } = useApp();
    const { setCliente } = useCliente();
    const { api } = useHelper();

    const buscarClientes = async () => {
        try {
            const res = await api.get('/cliente');
            if (res.data) {
                setCliente(res.data);
            }
        } catch (error) {
            toastRef.current.show({ severity: 'error', summary: 'Erro ao buscar clientes', life: 3000 });
        }
    };

    const adicionarCliente = async (cliente, callBackSucesso) => {
        try {
            const { status } = await api.post('/cliente', cliente);
            if (status === 200) {
                callBackSucesso();
                buscarClientes();
                toastRef.current.show({ severity: 'success', summary: 'Cliente adicionado com sucesso', life: 3000 });
        }
        } catch (error) {
            toastRef.current.show({ severity: 'error', summary: 'Erro ao adicionar cliente', life: 3000 });
        }
    };

    const editarCliente = async (cliente, callBackSucesso) => {
        try {
            const { status } = await api.put('/cliente', cliente);
            if (status === 200) {
                callBackSucesso();
                buscarClientes();
                toastRef.current.show({ severity: 'success', summary: 'Cliente editado com sucesso', life: 3000 });
            }
        } catch (error) {
            toastRef.current.show({ severity: 'error', summary: 'Erro ao editar cliente', life: 3000 });
        }
    };

    const deletarCliente = async (id_cliente) => {
        try {
            const { status } = await api.delete(`/cliente/${id_cliente}`);
            if (status === 200) {
                buscarClientes();
                toastRef.current.show({ severity: 'success', summary: 'Cliente deletado com sucesso', life: 3000 });
            }
        } catch (error) {
            toastRef.current.show({ severity: 'error', summary: 'Erro ao deletar cliente', life: 3000 });
        }
    };

    return {
        buscarClientes,
        adicionarCliente,
        editarCliente,
        deletarCliente,
    };
};

export default useClienteHook;
