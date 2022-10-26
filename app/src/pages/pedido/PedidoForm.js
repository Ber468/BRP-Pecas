import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

const PedidoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setPedido({ ...props.pedido, [name]: value });
  };

  const [dataMask, setDataMask] = useState(props.pedido.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 20 }}>
        <div className="card">
          <h5>Cadastro de Pedidos</h5>
          <div style={{ marginLeft: "33em" }}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="descricao">Descricao</label>
                <InputText
                  name="descricao"
                  {...register("descricao", {
                    required: {
                      value: true,
                      message: "Descricao é Campo obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "Descricao deve ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 2,
                      message: "Descricao deve ter no mínimo 2 caracteres!",
                    },
                  })}
                  defaultValue={props.pedido.descricao}
                  onChange={handleInputChange}
                />
                {errors.descricao && (
                  <span style={{ color: "red" }}>
                    {errors.descricao.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="data">Data</label>
                <InputMask
                  name="data"
                  mask="99/99/9999"
                  value={dataMask}
                  onChange={(e) => {
                    setDataMask(e.value);
                    props.setPedido({ ...props.pedido, data: e.value });
                  }}
                />
                {errors.data && (
                  <span style={{ color: "red" }}>{errors.data.message}</span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_fornecedor">Fornecedor:</label>
                <Dropdown
                  name="id_fornecedor"
                  value={props.pedido.id_fornecedor}
                  options={props.fornecedores}
                  optionLabel="nomefantasia"
                  optionValue="id_fornecedor"
                  onChange={handleInputChange}
                  required={true}
                  placeholder="Selecione um fornecedor"
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

export default PedidoForm;
