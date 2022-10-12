import React, { createContext, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';

const TipoUsuarioContext = createContext();

const TipoUsuarioProvider = ({ children }) => {
    const [tipoUsuario, setTipoUsuario] = React.useState([]);

    const [filtrosDataTable, setFiltrosDataTable] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return (
        <TipoUsuarioContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, tipoUsuario, setTipoUsuario }}>
            {children}
        </TipoUsuarioContext.Provider>
    );
};

export { TipoUsuarioProvider };
export default TipoUsuarioContext;