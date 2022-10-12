import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const VendaContext = createContext();

const VendaProvider = ({ children }) => {
    const [venda, setVenda] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <VendaContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, venda, setVenda }}>
            {children}
        </VendaContext.Provider>
    );
};

export { VendaProvider };
export default VendaContext;