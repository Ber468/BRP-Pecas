import React from 'react';
import PageHeader from '../../components/pageHeader/pageHeader';
import PaginaBase from '../../components/paginaBase/paginaBase';
import ClientesListagem from './clientesListagem/clientesListagem';

const Clientes = () => {
  return (
    <PaginaBase>
      <PageHeader title="Clientes" />
      <ClientesListagem />
    </PaginaBase>
  );
};

export default Clientes;