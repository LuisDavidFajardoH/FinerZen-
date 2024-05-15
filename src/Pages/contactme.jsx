import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Definir un tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#4a148c', // A deep purple color for text
    },
    background: {
      default: '#675a5ab3', // Light purple background
      paper: '#ce93d8', // Darker purple for the paper elements
    },
    text: {
      primary: '#ffcccafcffff', // White text for contrast
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});

const ContactUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px',
        marginTop: '10%',
        marginBottom: '2%',
        marginRight: '10%',
        
        
        backgroundColor: theme.palette.background.default,
      }}>
        <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
          ¡Contactanos!
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary, mb: 2 }}>
          Decide cambiar tu futuro financiero con la ayuda de la consejería especializada
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary, mb: 1 }}>
            <a href="https://wa.link/yo9nm3" target="_blank" style={{ color: "white", textDecoration: 'none' }}> <FontAwesomeIcon icon={faPhone} /> +57 301116395</a>
          
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary, mb: 1 }}>
          <a href="mailto:Finerzen.finanzas@gmail.com" style={{ color: "white", textDecoration: 'none' }}> <FontAwesomeIcon icon={faEnvelope} />
             ¡Enviar correo a FinerZen!
          </a>
        </Typography>
        <Box sx={{ maxWidth: 250, mt: 2 }}>
          {/* Replace with the correct path to your image */}
          <img src="/Images/hello.png" alt="Hello" style={{ width: '100%' }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ContactUs;
