import React from "react";
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";

function Menu() {
    let navigate = useNavigate();
    const items = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home',
        command: () => { navigate("/")}
      },
      {
        label: 'Cadastro', icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Usuario', icon: 'pi pi-fw pi-user',
            command: () => { navigate("/usuarios") }
          },
          {
            label: 'Cliente', icon: 'pi pi-fw pi-user',
            command: () => { navigate("/clientes") }
          },
          {
            label: 'TipoUsuario', icon: 'pi pi-fw pi-user',
            command: () => { navigate("/tipoUsuarios") }
          },
          {
            label: 'Venda', icon: 'pi pi-fw pi-user',
            command: () => { navigate("/vendas") }
          },
          {
            label: 'ItemVenda', icon: 'pi pi-fw pi-user',
            command: () => { navigate("/itemVendas") }
          }, {
            label: 'Produto', icon: 'pi pi-fw pi-user',
            command: () => { navigate("/produtos") }
          }
        ]
      },
      { label: 'Sair', icon: 'pi pi-sign-out',
      command: () => {
      sessionStorage.setItem('token',
     ''); },
      url:'/'
      },
      ];
     
    return (
    <Menubar model={items} 
    />)
  }
  export default Menu;