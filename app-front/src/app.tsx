import { ThemeProvider } from "@emotion/react";
import {
  StyledEngineProvider,
  ThemeProvider as ThemeProviderMui,
} from "@mui/material";
import { SnackbarProvider } from "notistack";

import { Routes } from "./routes/routes";
import { GlobalStyles } from "./styles/global.styles";
import theme from "./styles/theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProviderMui theme={theme}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <GlobalStyles />
            <Routes />
          </SnackbarProvider>
        </ThemeProvider>
      </ThemeProviderMui>
    </StyledEngineProvider>
  );
}

export default App;
