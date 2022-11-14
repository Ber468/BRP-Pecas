import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { InputMask } from "primereact/inputmask";
import { AutoComplete } from "primereact/autocomplete";
import TipoProdutoSrv from "../tipoProduto/TipoProdutoSrv";

const ProdutoForm = (props) => {
  const { tipoProdutos, setTipoProdutos } = useState([]);
  const { tipoProdutosFiltradas, setTipoProdutosFiltradas } = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setProduto({ ...props.produto, [name]: value });
  };
  const [precoVendaMask, setPrecoVendaMask] = useState(
    props.produto.precovenda
  );
  const [quantidadeEstoqueMask, setQuantidadeEstoqueMask] = useState(
    props.produto.quantidadeestoque
  );

  useEffect(() => {
    onClickAtualizarTipoProduto();
  }, []);

  const onClickAtualizarTipoProduto = () => {
    TipoProdutoSrv.listar()
      .then((response) => {
        setTipoProdutos(response.data);
      })
      .catch((e) => {});
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};
  //metodo
  const buscarTipoProduto = (event) => {
    setTimeout(() => {
      let _tipoProdutosFiltradas;
      if (!event.query.trim().length) {
        _tipoProdutosFiltradas = [...tipoProdutos];
      } else {
        _tipoProdutosFiltradas = tipoProdutos.filter((country) => {
          return country.tipo_nome
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setTipoProdutosFiltradas(_tipoProdutosFiltradas);
    }, 250);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 20 }}>
        <div className="card">
          <h5>Cadastro de Produtos</h5>
          <div style={{ marginLeft: "33em" }}>
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
                <InputMask
                  name="precovenda"
                  mask="R$ 9.999.999,99"
                  value={precoVendaMask}
                  onChange={(e) => {
                    setPrecoVendaMask(e.value);
                    props.setProduto({ ...props.produto, precovenda: e.value });
                  }}
                />
                {errors.precovenda && (
                  <span style={{ color: "red" }}>
                    {errors.precovenda.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="quantidadeestoque">QuantidadeEstoque</label>
                <InputMask
                  name="quantidadeestoque"
                  mask="9999"
                  value={quantidadeEstoqueMask}
                  onChange={(e) => {
                    setQuantidadeEstoqueMask(e.value);
                    props.setProduto({
                      ...props.produto,
                      quantidadeestoque: e.value,
                    });
                  }}
                />
                {errors.quantidadeestoque && (
                  <span style={{ color: "red" }}>
                    {errors.quantidadeestoque.message}
                  </span>
                )}
              </div>
            </div>
            <div
              className="p-fluid grid formgrid"
              style={{ marginLeft: "33%" }}
            >
              <div className="col-6 md:col-6">
                <span className="p-float-label">
                  <AutoComplete
                    name="id_tipoproduto"
                    dropdown
                    value={props.produto.id_tipoproduto}
                    suggestions={tipoProdutosFiltradas}
                    completeMethod={buscarTipoProduto}
                    field="tipo_nome"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="tipoProduto">TipoProduto</label>
                </span>
              </div>
            </div>
            <br />
            {/* <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_tipoproduto">Tipo Produto:</label>
                <Dropdown
                  name="id_tipoproduto"
                  value={props.produto.id_produto}
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
            </div> */}
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
