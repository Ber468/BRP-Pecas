import React from "react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const ItemPedidoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setItemPedido({ ...props.itemPedido, [name]: value });
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 20 }}>
        <div className="card">
          <h5>Cadastro de Itens Pedidos</h5>
          <div style={{marginLeft:"40%"}}>
          <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="quantidade">Quantidade</label>
                    <InputText
                      name="quantidade"
                      value={props.itemPedido.quantidade}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_produto">Produto:</label>
                <Dropdown
                  name="id_produto"
                  value={props.itemPedido.id_produto}
                  options={props.produtos}
                  onChange={(handleInputChange) =>
                    props.setItemPedido((itemPedido) => ({
                      ...itemPedido,
                      id_produto: handleInputChange.value,
                    }))
                  }
                  optionLabel="nome"
                  optionValue="id_produto"
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

export default ItemPedidoForm;
