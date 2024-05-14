import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Crear un tema específico para este componente si es necesario
const theme = createTheme({
  palette: {
    primary: { main: '#6200ea' },  // Ajusta a los colores de tu marca
    secondary: { main: '#ff4081' },
  },
  typography: {
    fontFamily: 'Raleway',  // Asegúrate de usar la fuente que prefieras
    h2: {
      fontSize: '2.0rem',
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1.2rem',
      color: '#666666',
    }
  }
});

// Componente AboutMe
function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', padding: 3, backgroundColor: '#1d1d1db3', borderRadius: 2 }}>
              <Typography variant="h2" gutterBottom  sx={{color:'#cccafc'}}>
                Sobre Mí
              </Typography>
              <Typography variant="body1" sx={{color:'#cccafc'}}>
                Soy [tu nombre], un/a [tu profesión] con [x años] de experiencia. Me especializo en [tu especialidad]. Mi pasión es ayudar a [tu público objetivo] a alcanzar [objetivos específicos]. Creo firmemente en [una filosofía o creencia importante relacionada con tu profesión].
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color:'#cccafc' }}>
                En mi tiempo libre, disfruto de [tus hobbies o intereses]. Estoy comprometido/a con el aprendizaje continuo y siempre estoy buscando nuevas técnicas y herramientas para mejorar mi trabajo y ofrecer los mejores resultados a mis clientes.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 7,
              }}
            >
              {/* Asumiendo que tienes una imagen adecuada */}
              <img
                src="/Images/fadia.png"  // Cambia esto por tu imagen real
                alt="Imagen de perfil"
                style={{ borderRadius: '50%', width: '100%', maxWidth: '300px', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default AboutMe;
