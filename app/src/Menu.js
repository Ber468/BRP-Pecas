import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

function Menu() {
  let navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/home");
      },
    },
    {
      label: "Cadastro",
      icon: "pi pi-plus",
      items: [
        {
          label: "Clientes",
          icon: "pi pi-users",
          command: () => {
            navigate("/cliente");
          },
        },
        {
          label: "Fornecedores",
          icon: "pi pi-car",
          command: () => navigate("/fornecedor"),
        },
        {
          label: "Produtos",
          icon: "pi pi-shopping-bag",
          command: () => {
            navigate("/produto");
          },
        },
        {
          label: "Usuários",
          icon: "pi pi-users",
          command: () => {
            navigate("/usuario");
          },
        },
        {
          label: "Pedidos",
          icon: "pi pi-credit-card",
          command: () => {
            navigate("/pedido");
          },
        },
        {
          label: "Vendas",
          icon: "pi pi-shopping-cart",
          command: () => {
            navigate("/venda");
          },
        },
      ],
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        localStorage.setItem("token", "");
      },
      url: "/",
    },
  ];

  return <Menubar model={items} />;
}

export default Menu;
