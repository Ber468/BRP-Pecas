import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const SimplesModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" fullWidth onClick={() => setOpen(true)}>
        Simple Modal
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Modal teste</DialogTitle>
        <DialogContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          suscipit beatae, exercitationem adipisci dicta veritatis eum nihil
          aspernatur asperiores distinctio temporibus, earum saepe delectus
          nulla commodi praesentium, accusamus esse repellendus?
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={() => setOpen(false)}>
            É verdade
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { SimplesModal };
