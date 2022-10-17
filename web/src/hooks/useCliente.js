
import { useContext } from 'react';
import ClientesContext from '../store/clientes/clientesContext';

const useClientes = () => {
  const _globalContext = useContext(ClientesContext);

  return _globalContext;
};

export default useClientes;