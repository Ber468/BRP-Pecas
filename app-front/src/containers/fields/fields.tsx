import { useState } from "react";
import {
  Grid,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const Fields = () => {
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container padding={2} gap={2} display="flex" alignItems="end">
      <Grid item display="flex" flexDirection="column">
        <Typography variant="subtitle1">Text</Typography>
        <TextField
          id="outlined-basic"
          placeholder="teste"
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item display="flex" flexDirection="column">
        <Typography variant="subtitle1">Select</Typography>
        <Select size="small" style={{ width: 200 }}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
      <Grid item display="flex" flexDirection="column">
        <Typography variant="subtitle1">Number</Typography>
        <TextField
          placeholder="teste"
          variant="outlined"
          size="small"
          type="number"
        />
      </Grid>
      <Grid item display="flex" flexDirection="column">
        <Typography variant="subtitle1">dropzone</Typography>
        <TextField
          placeholder="teste"
          variant="outlined"
          size="small"
          type="file"
        />
      </Grid>
      <Grid item>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          size="small"
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            LEFT
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            CENTER
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            RIGHT
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            JUSTIFY
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export { Fields };
