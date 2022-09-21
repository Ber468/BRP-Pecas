import {
  Button,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";

const Feedback = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Grid container padding={4} gap={8}>
      <Grid item display="flex" alignItems="center" gap={2}>
        Loader:
        <CircularProgress />
      </Grid>
      <Grid item display="flex" alignItems="center" gap={2}>
        <Tooltip title={<Typography>Lorem, ipsum dolor sit.</Typography>} arrow>
          <Typography>Hover me</Typography>
        </Tooltip>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => {
            enqueueSnackbar("Cuidado.", {
              variant: "warning",
              anchorOrigin: { vertical: "top", horizontal: "right" },
              autoHideDuration: 2000,
            });
          }}
        >
          Clique aqui
        </Button>
      </Grid>
    </Grid>
  );
};

export { Feedback };
