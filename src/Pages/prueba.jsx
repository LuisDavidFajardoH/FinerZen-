import React, { useState } from 'react';
import { Container, Box, Typography, Tab, Tabs, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    h5: {
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

const AboutSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
   
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/Images/fadia.webp" alt="About Me" style={{ maxWidth: '100%', borderRadius: '4px' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom sx={{fontFamily:'Raleway'}}> 
              Sobre Mí
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontFamily:'Raleway' }}>
            Soy [tu nombre], un/a [tu profesión] con [x años] de experiencia. Me especializo en [tu especialidad]. Mi pasión es ayudar a [tu público objetivo] a alcanzar [objetivos específicos]. Creo firmemente en [una filosofía o creencia importante relacionada con tu profesión].
                
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'white', color:'white', fontFamily:'Raleway' }}>
              <Tabs value={value} onChange={handleChange}  sx={{color:'white', fontFamily:'Raleway'}}>

                <Tab label="EDUCACIÓN" sx={{color:'white', fontFamily:'Raleway'}} />
                <Tab label="CERTIFICACIONES"  sx={{color:'white', fontFamily:'Raleway'}}/>
                <Tab label="HABILIDADES" sx={{color:'white', fontFamily:'Raleway'}} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography sx={{fontFamily:'Raleway'}}>Ejemplos, Que poner, Tu me dices</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography sx={{fontFamily:'Raleway'}}>Universidad ... , Bogotá</Typography>
              <Typography sx={{fontFamily:'Raleway'}}>Universidad ... , Remote</Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography sx={{fontFamily:'Raleway'}}>Certificado ...</Typography>
              <Typography sx={{fontFamily:'Raleway'}}>... Certificación</Typography>
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default AboutSection;
