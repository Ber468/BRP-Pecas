import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api
      .get("/usuario")
      .then((response) => {
        console.log(response);
        setUsuarios(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <h1>Relação de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id_usuario}>
            <b>Nome:</b>
            {usuario.nome_usuario}
            <br />
            <b>Email:</b>
            {usuario.email}
            <br />
            <b>Senha:</b>
            {usuario.senha}
            <br />
            <b>Tipo Usuário:</b>
            {usuario.id_tipousuario}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
