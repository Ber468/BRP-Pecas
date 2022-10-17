import React, { useEffect, useState } from "react";
import api from '../../Services/api';

export default function TipoUsuarios() {
    const [tipoUsuarios, setTipoUsuarios] = useState([]);

    useEffect(() => {
        api.get("/TipoUsuario")
        .then(response => {
            console.log(response);
            setTipoUsuarios(response.data);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div>
            <h1>Relação de Tipos Usuarios</h1>
            <ul>
                {tipoUsuarios.map(tipoUsuario => (
                    <li key={tipoUsuario.id_tipousuario}>
                        <b>Tipo Nome:</b>{tipoUsuario.tipo_nome}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
