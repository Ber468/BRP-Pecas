import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const ProdutoContext = createContext();

const ProdutoProvider = ({ children }) => {
    const [produto, setProduto] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <ProdutoContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, produto, setProduto }}>
            {children}
        </ProdutoContext.Provider>
    );
};

export { ProdutoProvider };
export default ProdutoContext;