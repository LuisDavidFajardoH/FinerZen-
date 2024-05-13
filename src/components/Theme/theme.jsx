import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
    ].join(','),
  },
  // Puedes añadir otras personalizaciones de tema aquí
});

export default theme;