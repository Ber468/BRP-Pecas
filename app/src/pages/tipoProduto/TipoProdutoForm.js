import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const TipoProdutoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setTipoProduto({ ...props.tipoProduto, [name]: value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.salvar();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <div style={{ padding: 20 }}>
        <div className="card">
          <h5 style={{marginRight: "0.3vh"}}>Cadastro Tipos de Produtos</h5>
          <div style={{marginLeft:"52vh"}}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-5">
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
                  defaultValue={props.tipoProduto.descricao}
                  onChange={handleInputChange}
                />
                {errors.descricao && (
                  <span style={{ color: "red" }}>
                    {errors.descricao.message}
                  </span>
                )}
              </div>
            </div>
            <Button
              style={{ float: "left" }}
              type="submit"
              icon="pi pi-pencil"
              className="p-button-rounded p-button-text "
              label="Salvar"
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

export default TipoProdutoForm;
