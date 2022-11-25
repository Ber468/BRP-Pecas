import "./index.css";

import logo from "../../components/img/logo.svg";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import LoginSrv from "./LoginSrv";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";

const LoginForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCredenciais({ ...credenciais, [id]: value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toastRef = useRef();
  const [credenciais, setCredenciais] = useState({
    email: "",
    senha: "",
  });
  const onSubmit = (data) => {
    LoginSrv.login(credenciais).then((response) => {
      let token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
        window.location = "/";
      } else {
        toastRef.current.show({
          severity: "error",
          summary: "Erro no login",
          life: 5000,
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form">
          <h2>Login</h2>
          <InputText
            type="text"
            name="email"
            {...register("email", { 
            required: { 
            value: true, 
            message: "O email é obrigatório",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email inválido",
            },
          })}
            id="email"
            value={credenciais.email}
            onChange={handleInputChange}
          />
          <p></p>
          {errors.email && (
          <span style={{ color: "red", fontFamily: "Verdana", fontWeigth: "bold"}}>
          {errors.email.message}
          </span>
          )}
          <br/><br/>
          <InputText
            type="password"
            name="senha"
            {...register("senha", {
            required: {
            value: true,
            message: "A senha é obrigatória",
            },
          })}
            id="senha"
            value={credenciais.senha}
            onChange={handleInputChange}
          />
          <p></p>
          {errors.senha && (
          <span style={{ color: "red", fontFamily: "Verdana", fontWeigth: "bold"}}
          >
          {errors.senha.message}
          </span>
          )}
          <br></br>
          <button type="submit" className="button">
            Entrar
          </button>
        </div>
        <div className="side">
          <img src={logo} className="img" alt="logo" />{" "}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
