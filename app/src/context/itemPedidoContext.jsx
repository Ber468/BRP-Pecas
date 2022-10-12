import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const ItemPedidoContext = createContext();

const ItemPedidoProvider = ({ children }) => {
    const [itemPedido, setItemPedido] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <ItemPedidoContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, itemPedido, setItemPedido }}>
            {children}
        </ItemPedidoContext.Provider>
    );
};

export { ItemPedidoProvider };
export default ItemPedidoContext;