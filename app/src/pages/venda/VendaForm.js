import React from "react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const VendaForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setVenda({ ...props.venda, [name]: value });
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <div style={{ padding: 20 }}>
        <div className="card">
          <h5 style={{marginRight: "0.7vh"}}>Cadastro de Vendas</h5>
          <div style={{marginLeft:"52vh"}}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-5">
                <label htmlFor="data">Data</label>
                <Calendar
                  name="data"
                  showIcon
                  dateFormat="dd/mm/yy"
                  defaultValue={props.venda.data}
                  onChange={handleInputChange}
                />
                {errors.data && (
                  <span style={{ color: "red" }}>{errors.data.message}</span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-5">
                <label htmlFor="id_usuario">Usuario:</label>
                <Dropdown
                  name="id_usuario"
                  value={props.venda.id_usuario}
                  options={props.usuarios}
                  onChange={(handleInputChange) =>
                    props.setVenda((venda) => ({
                      ...venda,
                      id_usuario: handleInputChange.value,
                    }))
                  }
                  optionLabel="nome_usuario"
                  optionValue="id_usuario"
                  placeholder="Selecione um Usuario"
                />
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-5">
                <label htmlFor="id_cliente">Cliente:</label>
                <Dropdown
                  name="id_cliente"
                  value={props.venda.id_cliente}
                  options={props.clientes}
                  onChange={(handleInputChange) =>
                    props.setVenda((venda) => ({
                      ...venda,
                      id_cliente: handleInputChange.value,
                    }))
                  }
                  optionLabel="nome"
                  optionValue="id_cliente"
                  placeholder="Selecione um Cliente"
                />
              </div>
            </div>
              <Button
                style={{ float: "left" }}
                type="submit"
                icon="pi pi-pencil"
                className="p-button-rounded p-button-text "
                label="Salvar"
                onClick={props.salvar}
              ></Button>
              <Button
                style={{ float: "left", marginLeft: "3vh" }}
                type="button"
                icon="pi pi-trash"
                className="p-button-rounded p-button-text"
                label="Cancelar"
                onClick={props.cancelar}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default VendaForm;
