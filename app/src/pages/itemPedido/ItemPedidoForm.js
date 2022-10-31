import React, { useState } from "react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

const ItemPedidoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setItemPedido({ ...props.itempedido, [name]: value });
  };

  const [quantidadeMask, setQuantidadeMask] = useState(props.itempedido.data);

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
          <div style={{ marginLeft: "33em" }}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="quantidade">Quantidade</label>
                <InputMask
                  name="quantidade"
                  mask="999.999"
                  value={quantidadeMask}
                  onChange={(e) => {
                    setQuantidadeMask(e.value);
                    props.setItemPedido({
                      ...props.itempedido,
                      quantidade: e.value,
                    });
                  }}
                />
                {errors.quantidade && (
                  <span style={{ color: "red" }}>
                    {errors.quantidade.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_pedido">Pedido:</label>
                <Dropdown
                  name="id_pedido"
                  value={props.itempedido.id_pedido}
                  options={props.pedido}
                  optionLabel="descricao"
                  optionValue="id_pedido"
                  onChange={handleInputChange}
                  required={true}
                  placeholder="Selecione um Pedido"
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

export default ItemPedidoForm;
