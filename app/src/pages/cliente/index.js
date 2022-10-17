import React, { useEffect, useState } from "react";
import api from '../../Services/api';

export default function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        api.get("/cliente")
        .then(response => {
            console.log(response);
            setClientes(response.data);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div>
            <h1>Relação de Clientes</h1>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id_cliente}>
                        <b>Nome:</b>{cliente.nome}<br/>
                        <b>Endereço:</b>{cliente.endereco}<br/>
                        <b>CPF:</b>{cliente.cpf}<br/>
                        <b>Telefone:</b>{cliente.telefone}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
