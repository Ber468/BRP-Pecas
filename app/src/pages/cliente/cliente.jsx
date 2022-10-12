import React from "react";

import { ClienteProvider } from "../../context/clienteContext";
import ClienteDataTable from './clienteDataTable/clienteDataTable';

const Cliente = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Clientes</h1>
            <ClienteDataTable />
        </div>
    );
};

const ClienteWrapper = () => {
    return (
        <ClienteProvider>
            <Cliente />
        </ClienteProvider>
    );
};

export default ClienteWrapper;