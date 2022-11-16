import React, { useState } from "react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";

const ItemVendaForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setItemVenda({ ...props.itemvenda, [name]: value });
  };

  // const [valorMask, setValorMask] = useState(props.itemvenda.data);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 20 }}>
        <div className="card">
          <h5>Cadastro de Itens Vendas</h5>
          <div style={{ marginLeft: "33em" }}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="valor">Valor</label>
                <InputText
                  name="valor"
                  defaultValue={props.itemVenda.valor}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_venda">Venda:</label>
                <Dropdown
                  name="id_venda"
                  value={props.itemvenda.id_venda}
                  options={props.venda}
                  optionLabel="valorTotal"
                  optionValue="id_venda"
                  onChange={handleInputChange}
                  required={true}
                  placeholder="Selecione uma Venda"
                />
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_produto">Produto:</label>
                <Dropdown
                  name="id_produto"
                  value={props.itempedido.id_produto}
                  options={props.produto}
                  optionLabel="nome"
                  optionValue="id_produto"
                  onChange={handleInputChange}
                  required={true}
                  placeholder="Selecione um Produto"
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

export default ItemVendaForm;
