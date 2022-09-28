import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "data",
    headerName: "Data",
    maxWidth: 150,
    disableColumnMenu: true,
  },
  {
    field: "valorTotal",
    headerName: "Valor total",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: "usuario",
    headerName: "Usuário",
    maxWidth: 150,
    disableColumnMenu: true,
  },
  {
    field: "cliente",
    headerName: "Cliente",
    maxWidth: 150,
    disableColumnMenu: true,
  },
  {
    field: "acoes",
    headerName: "Ações",
    disableColumnMenu: true,
    maxWidth: 150,
    align: "left",
  },
];
