import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const ItemVendaContext = createContext();

const ItemVendaProvider = ({ children }) => {
    const [itemVenda, setItemVenda] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <ItemVendaContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, itemVenda, setItemVenda }}>
            {children}
        </ItemVendaContext.Provider>
    );
};

export { ItemVendaProvider };
export default ItemVendaContext;