import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const PedidoContext = createContext();

const PedidoProvider = ({ children }) => {
    const [pedido, setPedido] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <PedidoContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, pedido, setPedido }}>
            {children}
        </PedidoContext.Provider>
    );
};

export { PedidoProvider };
export default PedidoContext;