import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";

const UsuarioForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setUsuario({ ...props.usuario, [name]: value });
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
          <h5>Cadastro de Usuários</h5>
          <div style={{ marginLeft: "33em" }}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="nome_usuario">Nome</label>
                <InputText
                  name="nome_usuario"
                  {...register("nome_usuario", {
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
                  defaultValue={props.usuario.nome_usuario}
                  onChange={handleInputChange}
                />
                {errors.nome_usuario && (
                  <span style={{ color: "red" }}>
                    {errors.nome_usuario.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="email">Email</label>
                <InputText
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email é Campo obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "Email deve ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 10,
                      message: "Email deve ter no mínimo 10 caracteres!",
                    },
                  })}
                  defaultValue={props.usuario.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12  md:col-4">
                <label htmlFor="senha">Senha</label>
                <InputText
                  name="senha"
                  {...register("senha", {
                    required: {
                      value: true,
                      message: "Senha é Campo obrigatório!",
                    },
                    maxLength: {
                      value: 30,
                      message: "Senha deve ter no máximo 30 caracteres!",
                    },
                    minLength: {
                      value: 7,
                      message: "Senha deve ter no mínimo 7 caracteres!",
                    },
                  })}
                  defaultValue={props.usuario.senha}
                  onChange={handleInputChange}
                  required={true}
                />
                {errors.senha && (
                  <span style={{ color: "red" }}>{errors.senha.message}</span>
                )}
              </div>
            </div>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="id_tipousuario">Tipo Usuario:</label>
                <Dropdown
                  name="id_tipousuario"
                  value={props.usuario.id_tipousuario}
                  options={props.tipoUsuarios}
                  onChange={(handleInputChange) =>
                    props.setUsuario((usuario) => ({
                      ...usuario,
                      id_tipousuario: handleInputChange.value,
                    }))
                  }
                  optionLabel="tipo_nome"
                  optionValue="id_tipousuario"
                  placeholder="Selecione um usuario"
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

export default UsuarioForm;
