import React from "react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const ItemVendaForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setItemVenda({ ...props.itemVenda, [name]: value });
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
          <h5 style={{marginRight: "0.5vh"}}>Cadastro de Itens Vendas</h5>
          <div style={{marginLeft:"52vh"}}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-5">
                <label htmlFor="quantidade">Quantidade</label>
                <InputText
                  name="quantidade"
                  value={props.itemVenda.quantidade}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-5">
                <label htmlFor="id_produto">Produto:</label>
                <Dropdown
                  name="id_produto"
                  value={props.itemVenda.id_produto}
                  options={props.produtos}
                  onChange={(handleInputChange) =>
                    props.setItemVenda((itemVenda) => ({
                      ...itemVenda,
                      id_produto: handleInputChange.value,
                    }))
                  }
                  optionLabel="nome"
                  optionValue="id_produto"
                  placeholder="Selecione um produto"
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

export default ItemVendaForm;
