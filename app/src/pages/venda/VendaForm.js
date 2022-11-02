import React, { useState } from "react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

const VendaForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setVenda({ ...props.venda, [name]: value });
  };

  const [dataMask, setDataMask] = useState(props.venda.data);
  const [valorTotalMask, setValorTotalMask] = useState(props.venda.valortotal);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 20 }}>
        <div className="card">
          <h5>Cadastro de Vendas</h5>
          <div style={{ marginLeft: "33em" }}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="data">Data</label>
                <InputMask
                  name="data"
                  mask="99/99/9999"
                  value={dataMask}
                  onChange={(e) => {
                    setDataMask(e.value);
                    props.setVenda({ ...props.venda, data: e.value });
                  }}
                />
                {errors.data && (
                  <span style={{ color: "red" }}>{errors.data.message}</span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="valortotal">Valor Total</label>
                <InputMask
                  name="valortotal"
                  mask="999.999.999.999.999,99"
                  value={valorTotalMask}
                  onChange={(e) => {
                    setValorTotalMask(e.value);
                    props.setVenda({ ...props.venda, valortotal: e.value });
                  }}
                />
                {errors.valortotal && (
                  <span style={{ color: "red" }}>
                    {errors.valortotal.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
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
              <div className="field col-12 md:col-4">
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
            <div>
              <Button
                type="submit"
                icon="pi pi-pencil"
                className="p-button-rounded p-button-text "
                label="Salvar"
                onClick={props.salvar}
              ></Button>
              <Button
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
