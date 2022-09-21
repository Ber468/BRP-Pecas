import { Grid } from "@mui/material";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { columns } from "./dataTable.static";

const DataTable = () => {
  const rows: GridRowsProp = new Array(25).fill(0).map((_, index) => ({
    id: index,
    emissao: "01/01/2021",
    numero: 214120,
    tipoCte: "Normal",
    tomador: "CT-E Emitido em ambiente de homologação",
    status: "Manifestado",
    origemDestino: "São Paulo/SP - Rio de Janeiro/RJ",
    valorTotal: "R$ 1.000,00",
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

export { DataTable };
