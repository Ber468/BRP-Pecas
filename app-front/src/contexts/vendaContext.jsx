import React, { createContext, useState } from 'react';

const VendaContext = createContext();

const VendaProvider = ({ children }) => {
  const [venda, setVenda] = React.useState([]);

  const [filtrosDataTable, setFiltrosDataTable] = useState({
    global: { value: null },
  });

  return (
    <VendaContext.Provider value={{ filtrosDataTable, setFiltrosDataTable, venda, setVenda }}>
      {children}
    </VendaContext.Provider>
  );
};

export { VendaProvider };
export default VendaContext;