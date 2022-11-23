import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";

const ProdutoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setProduto({ ...props.produto, [name]: value });
  };
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
          <h5>Cadastro de Produtos</h5>
          <div style={{marginLeft:"40%"}}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="nome">Nome</label>
                <InputText
                  name="nome"
                  {...register("nome", {
                    required: {
                      value: true,
                      message: "Nome é Campo obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "Nome deve ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 2,
                      message: "Nome deve ter no mínimo 2 caracteres!",
                    },
                  })}
                  defaultValue={props.produto.nome}
                  onChange={handleInputChange}
                />
                {errors.nome && (
                  <span style={{ color: "red" }}>{errors.nome.message}</span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="precovenda">PrecoVenda</label>
                <InputText
                  name="precovenda"
                  defaultValue={props.produto.precovenda}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="quantidadeestoque">QuantidadeEstoque</label>
                <InputText
                  name="quantidadeestoque"
                  defaultValue={props.produto.quantidadeestoque}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_tipoproduto">Tipo Produto:</label>
                <Dropdown
                  name="id_tipoproduto"
                  value={props.produto.id_tipoproduto}
                  options={props.tipoProdutos}
                  onChange={(handleInputChange) =>
                    props.setProduto((produto) => ({
                      ...produto,
                      id_tipoproduto: handleInputChange.value,
                    }))
                  }
                  optionLabel="descricao"
                  optionValue="id_tipoproduto"
                  placeholder="Selecione um produto"
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

export default ProdutoForm;
