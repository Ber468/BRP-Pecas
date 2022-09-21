import { Grid } from "@mui/material";
import { FormModal } from "./formModal/formModal";
import { SimplesModal } from "./simpleModal/simpleModal";

const Modais = () => {
  return (
    <Grid container padding={2} gap={2}>
      <Grid item flex={1}>
        <SimplesModal />
      </Grid>
      <Grid item flex={1}>
        <FormModal />
      </Grid>
    </Grid>
  );
};

export { Modais };
