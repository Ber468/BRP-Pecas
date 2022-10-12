import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <UsuarioContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioProvider };
export default UsuarioContext;