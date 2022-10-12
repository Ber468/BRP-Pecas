import { useContext } from 'react';
import ClienteContext from '../context/clienteContext';

const useCliente = () => {
    const _clienteContext = useContext(ClienteContext);

    return _clienteContext;
};

export default useCliente;