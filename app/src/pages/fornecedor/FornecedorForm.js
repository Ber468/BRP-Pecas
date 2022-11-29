import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { InputMask } from "primereact/inputmask";

const FornecedorForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setFornecedor({ ...props.fornecedor, [name]: value });
  };

  const [cnpjMask, setCnpjMask] = useState(props.fornecedor.cnpj);

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
          <h5 style={{marginRight: "0.5vh"}}>Cadastro de Fornecedores</h5>
          <div style={{marginLeft:"52vh"}}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-5">
                <label htmlFor="nomefantasia">Nome Fantasia</label>
                <InputText
                  name="nomefantasia"
                  {...register("nomefantasia", {
                    required: {
                      value: true,
                      message: "Nome Fantasia é Campo obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "Nome Fantasia deve ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 2,
                      message: "Nome Fantasia deve ter no mínimo 2 caracteres!",
                    },
                  })}
                  defaultValue={props.fornecedor.nomefantasia}
                  onChange={handleInputChange}
                />
                {errors.nomefantasia && (
                  <span style={{ color: "red" }}>
                    {errors.nomefantasia.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-5">
                <label htmlFor="razaosocial">Razão Social</label>
                <InputText
                  name="razaosocial"
                  {...register("razaosocial", {
                    required: {
                      value: true,
                      message: "Razão Social é Campo obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "Razão Social deve ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 2,
                      message: "Razão Social deve ter no mínimo 2 caracteres!",
                    },
                  })}
                  defaultValue={props.fornecedor.razaosocial}
                  onChange={handleInputChange}
                />
                {errors.razaosocial && (
                  <span style={{ color: "red" }}>
                    {errors.razaosocial.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-5">
                <label htmlFor="cnpj">CNPJ</label>
                <InputMask
                  name="cnpj"
                  mask="99.999.999/9999-99"
                  value={cnpjMask}
                  onChange={(e) => {
                    setCnpjMask(e.value);
                    props.setFornecedor({ ...props.fornecedor, cnpj: e.value });
                  }}
                />
                {errors.cnpj && (
                  <span style={{ color: "red" }}>{errors.cnpj.message}</span>
                )}
              </div>
            </div>
            <Button
              style={{ float: "left"}}
              type="submit"
              icon="pi pi-pencil"
              className="p-button-rounded p-button-text "
              label="Salvar"
            ></Button>
            <Button
              style={{float: "left", marginLeft: "3vh"}}
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

export default FornecedorForm;
