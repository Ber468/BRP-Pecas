import { Chip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "emissao",
    headerName: "Emissão",
    maxWidth: 150,
    disableColumnMenu: true,
  },
  {
    field: "numero",
    headerName: "Número",
    maxWidth: 150,
    disableColumnMenu: true,
  },
  {
    field: "tipoCte",
    headerName: "Tipo de Cte",
    maxWidth: 150,
    disableColumnMenu: true,
  },
  {
    field: "tomador",
    headerName: "Tomador",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "origemDestino",
    headerName: "Origem -> Destino",
    disableColumnMenu: true,
    width: 300,
  },
  {
    field: "valorTotal",
    headerName: "Valor total",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: "status",
    headerName: "Status",
    disableColumnMenu: true,
    width: 150,
    renderCell: (params) => {
      return (
        <Chip label={params.value} style={{ width: "100%" }} color="info" />
      );
    },
  },
  {
    field: "acoes",
    headerName: "Ações",
    disableColumnMenu: true,
    maxWidth: 150,
    align: "left",
  },
];
