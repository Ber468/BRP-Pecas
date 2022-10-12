import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const FornecedorContext = createContext();

const FornecedorProvider = ({ children }) => {
    const [fornecedor, setFornecedor] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <FornecedorContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, fornecedor, setFornecedor }}>
            {children}
        </FornecedorContext.Provider>
    );
};

export { FornecedorProvider };
export default FornecedorContext;