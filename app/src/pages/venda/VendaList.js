import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";

const template2 = {
  layout:
    "RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink",
  RowsPerPageDropdown: (options) => {
    const dropdownOptions = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 15, value: 15 },
    ];

    return (
      <React.Fragment>
        <span
          className="mx-1"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          Linhas por página:{" "}
        </span>
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
        />
      </React.Fragment>
    );
  },
  CurrentPageReport: (options) => {
    return (
      <span
        style={{
          color: "var(--text-color)",
          userSelect: "none",
          width: "120px",
          textAlign: "center",
        }}
      >
        {options.first} - {options.last} de {options.totalRecords}
      </span>
    );
  },
};

const dateBodyTemplate = (rowData) => {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(rowData.data));
};

const VendaList = (props) => {
  const countryBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <button
          onClick={() => props.editar(rowData.id_venda)}
          className="btn btn-warning"
        >
          Editar
        </button>
        <button
          onClick={() => props.excluir(rowData.id_venda)}
          className="btn btn-danger"
        >
          Excluir
        </button>
        <button style={{margin: '8px'}} type="button" className="btn btn-info">
          <Link to={`/itemVenda?id=${rowData.id_venda}`} style={{textDecoration: "none", color: "black"}}>Itens Vendas</Link>
        </button>
      </React.Fragment>
    );
  };
  return (
    <div>
      <div>
        <h4 style={{marginTop:"2%"}}>Listagem de Vendas</h4>
        <button
          button style={{margin: '8px'}}
          type="button"
          className="btn btn-light btn-sm"
          onClick={props.onClickAtualizar}
        >
          Atualizar
        </button>
        <button
          type="button"
          className="btn btn-light btn-sm"
          onClick={props.inserir}
        >
          Inserir
        </button>
        <div className="card">
          <DataTable
            value={props.vendas}
            responsiveLayout="scroll"
            selectionMode="single"
            paginator
            paginatorTemplate={template2}
            rows={5}
            paginatorClassName="justify-content-center"
            className="mt-6"
          >
            <Column field="id_venda" header="ID Venda" sortable></Column>
            <Column
              body={dateBodyTemplate}
              header="Data"
              sortable
              filter
            ></Column>
            <Column
             body={
                (rowData) => {
                  return rowData.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             }}
              field="valorTotal"
              header="Valor Total"
              sortable
              filter
            ></Column>
            <Column field="usuario" header="Usuario" sortable filter></Column>
            <Column field="cliente" header="Cliente" sortable filter></Column>
            <Column header="Operações" body={countryBodyTemplate}></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};
export default VendaList;
