import { Router } from './routes/routes';
import { GlobalProvider } from './store/global/globalContext';
import { SnackbarProvider } from 'notistack';
import { createTheme, ThemeProvider } from '@mui/material';
import { tema } from './themes/tema';

import  ClienteProvider from './store/clientes/clientesContext';

const Providers = ({ children }) => {
  return (
    <GlobalProvider>
          <ClienteProvider>{children}</ClienteProvider>
    </GlobalProvider>
  );
};

const App = () => {
  const theme = createTheme(tema);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Providers>
          <Router />
        </Providers>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;