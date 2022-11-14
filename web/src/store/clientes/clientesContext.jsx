import React, { createContext, useState } from 'react';

const ClientesContext = createContext();

const ClientesProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [adicionarEditarDialog, setAdicionarEditarDialog] = useState({ open: false });
  const [excluirDialog, setExcluirDialog] = useState({ open: false });

  return (
    <ClientesContext.Provider
      value={{
        data,
        setData,
        adicionarEditarDialog,
        setAdicionarEditarDialog,
        excluirDialog,
        setExcluirDialog,
      }}
    >
      {children}
    </ClientesContext.Provider>
  );
};

export { ClientesProvider };
export default ClientesContext;