import { useContext } from 'react';
import ItemVendaContext from '../context/itemVendaContext';

const useItemVenda = () => {
    const _itemVendaContext = useContext(ItemVendaContext);

    return _itemVendaContext;
};

export default useItemVenda;