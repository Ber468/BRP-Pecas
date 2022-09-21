import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
  TextField,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useFormModal } from "./useFormModal";

const FormModal = () => {
  const {
    open,
    handleClose,
    handleOpen,
    control,
    onSubmit,
    errors,
    isSubmitting,
  } = useFormModal();

  return (
    <>
      <Button variant="contained" fullWidth onClick={handleOpen}>
        Modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog com Form</DialogTitle>
        <DialogContent>
          <Grid container gap={2}>
            <Grid item>
              <DialogContentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae quod voluptas quidem voluptates quibusdam
              </DialogContentText>
            </Grid>
            <Grid item gap={0.5} display="flex" flexDirection="column">
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField size="small" {...field} />}
                rules={{
                  required: "Campo obrigatório",
                }}
              />
              {errors.name && (
                <Alert severity="error" style={{ zoom: 0.7 }}>
                  {errors.name.message}
                </Alert>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Voltar
          </Button>
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={isSubmitting}
            style={{
              width: 100,
            }}
          >
            {!isSubmitting ? (
              "Salvar"
            ) : (
              <CircularProgress size={20} color="info" />
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { FormModal };
