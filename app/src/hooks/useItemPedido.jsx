import { useContext } from 'react';
import ItemPedidoContext from '../context/itemPedidoContext';

const useItemPedido = () => {
    const _itemPedidoContext = useContext(ItemPedidoContext);

    return _itemPedidoContext;
};

export default useItemPedido;