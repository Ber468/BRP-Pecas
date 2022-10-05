import { Grid } from "@mui/material";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { columns } from "./vendas.static";
const Vendas = () => {
  const rows: GridRowsProp = new Array(25).fill(0).map((_, index) => ({
    id: index,
    data: "2021-10-10",
    valorTotal: 100,
    usuario: "usuario",
    cliente: "cliente",
  }));

  return (
    <Grid item display="flex" padding={4} height="100%">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        hideFooter
      />
    </Grid>
  );
};

export { Vendas };