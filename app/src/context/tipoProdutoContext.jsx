import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const TipoProdutoContext = createContext();

const TipoProdutoProvider = ({ children }) => {
    const [tipoProduto, setTipoProduto] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <TipoProdutoContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, tipoProduto, setTipoProduto }}>
            {children}
        </TipoProdutoContext.Provider>
    );
};

export { TipoProdutoProvider };
export default TipoProdutoContext;