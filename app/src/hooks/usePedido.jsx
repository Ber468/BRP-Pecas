import { useContext } from 'react';
import PedidoContext from '../context/pedidoContext';

const usePedido = () => {
    const _pedidoContext = useContext(PedidoContext);

    return _pedidoContext;
};

export default usePedido;