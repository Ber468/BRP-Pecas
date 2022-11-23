import "./index.css";

import logo from "../../components/img/logo.svg";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import LoginSrv from "./LoginSrv";
import "primeicons/primeicons.css";

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
          <input
            className="test"
            type="text"
            name="email"
            {...register("email", { required: true, message: 'O email é obrigatório' },
            )}
            placeholder="Email"
            id="email"
            value={credenciais.email}
            onChange={handleInputChange}
          />
          <br></br>
          <input
            className="test"
            type="password"
            name="senha"
            placeholder="Senha"
            id="senha"
            value={credenciais.ususenha}
            onChange={handleInputChange}
          />
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
