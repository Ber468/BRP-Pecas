import React, { useEffect, useState } from "react";
import api from '../../Services/api';

export default function Fornecedores() {
    const [fornecedores, setFornecedores] = useState([]);

    useEffect(() => {
        api.get("/fornecedor")
        .then(response => {
            console.log(response);
            setFornecedores(response.data);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div>
            <h1>Relação de Fornecedores</h1>
            <ul>
                {fornecedores.map(fornecedor => (
                    <li key={fornecedor.id_fornecedor}>
                        <b>Nome Fantasia:</b>{fornecedor.nomeFantasia}<br/>
                        <b>Razão Social:</b>{fornecedor.razaoSocial}<br/>
                        <b>CNPJ:</b>{fornecedor.cnpj}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
