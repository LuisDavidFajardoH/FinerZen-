import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ServiceCards from './cards';
import Separator from './separador';
// import AboutMe from './aboutme';
import Testimonials from './testimonios';
import ContactUs from './contactme';
import AboutSection from './prueba';


const theme = createTheme({
  palette: {
    primary: { main: '#6200ea' },
    secondary: { main: '#ff4081' },
    tercer: { main: '#27DBA4' },
    cuarto: { main: '#43DDFF' },
    quinto: { main: '#FCCD1F' },
    sexto: { main: '#A75AC2' },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      fontFamily: 'Raleway',
      color: '#ffffff',
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Menor tamaño de fuente para dispositivos pequeños
      },
      '@media (max-width:400px)': {
        fontSize: '1.5rem', // Menor tamaño de fuente para dispositivos pequeños
      },
    },
    body1: {
      fontSize: '1.4rem',
      fontWeight: 'normal',

      color: '#ffffff',
      '@media (max-width:600px)': {
        fontSize: '1rem', // Menor tamaño de fuente para dispositivos pequeños
      },
      '@media (max-width:400px)': {
        fontSize: '1rem', // Menor tamaño de fuente para dispositivos pequeños
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '5px ',
          fontSize: '1.1rem',
          fontFamily: 'Raleway',
          maxHeight: '10%',
          maxWidth: '70%',
          fontWeight: 'bold',
          marginBottom: '-20%',
          marginLeft: '-40%',

          "&:hover": {
            backgroundColor: '#6200ea',
          },
          '@media (max-width:600px)': {
            padding: '8px 20px', // Menos padding para dispositivos pequeños
            fontSize: '0.9rem', // Menor tamaño de fuente para el botón
            maxHeight: '20%',
            marginLeft: '0%',
            maxWidth: '100%',
            fontFamily: 'Raleway',
          },
          '@media (max-width:400px)': {
            padding: '8px 20px', // Menos padding para dispositivos pequeños
            fontSize: '0.9rem', // Menor tamaño de fuente para el botón
            maxHeight: '20%',
            marginLeft: '0%',
            maxWidth: '100%',
            fontFamily: 'Raleway',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            maxWidth: '100%',
            marginLeft: '-2%'
          },
          '@media (max-width:400px)': {
            maxWidth: '100%',
            marginBottom: '10%',
            marginTop: '0%'
          }
        },
      },
    },
  },



});

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Box sx={{
          display: 'flex',
          flexDirection: 'column',  
          fontFamily: 'Raleway',
          // width: '150%',
          justifyContent: 'space-between',
          // background: '#6B66FF',
          background: 'linear-gradient(90deg, rgba(16,0,254,1) 0%, rgba(129,73,105,1) 55%, rgba(8,8,41,1) 100%);',
          '@media (max-width:600px)': {
            background: 'linear-gradient(135deg, #7c4dff 30%, #18ffff 90%);', // Ajusta el gradiente para dispositivos pequeños
          },
        }}
      >
        <Container sx={{
            flexGrow: 1,
            display: 'flex',
            marginTop: '6rem',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            
          }}
        >
          <Grid container spacing={5} sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '8px',
              p: 5,
              width: '100%',
              maxWidth: 10000,
              '@media (max-width:600px)': {
                maxWidth: '100%', // Ajusta el ancho para dispositivos pequeños
              },
            }}
          >
            <Grid item xs={12} sm={6}>
              <Box sx={{
                  display: 'flex',
                  justifyContent: 'center', // Centra el logo en dispositivos pequeños
                }}
              >
                <img
                  src="/Images/logo2.svg"
                  alt="Logo de FinerZen"
                  style={{
                    width: '100%', // Ajusta el tamaño del logo en dispositivos móviles
                    maxWidth: '250px',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h1" gutterBottom sx={{ color: '#cccafc' }}>
                  Reinventa tu Gestión Financiera
                </Typography>
                <Typography variant="body1">
                  Con FinerZen, explora soluciones personalizadas para lograr estabilidad y satisfacción financiera.<br />
                  <strong>Empieza a transformar tu futuro financiero hoy.</strong>
                </Typography>
                <br />
                <Button variant="contained" color="secondary" sx={{ mt: 1, width: '100%' }} href='/encuesta'>
                  ¡Haz la encuesta ahora!
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Separator text="Nuestros Servicios" />
        <ServiceCards  />
        <Separator text="Sobre Mí" />
        {/* <AboutMe /> */}
        <AboutSection />
        <Separator text="Testimonios" />
        <Testimonials />
        <ContactUs />

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;




