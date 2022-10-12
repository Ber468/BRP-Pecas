import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
    const [cliente, setCliente] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <ClienteContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, cliente, setCliente }}>
            {children}
        </ClienteContext.Provider>
    );
};

export { ClienteProvider };
export default ClienteContext;