import React, { useState } from "react";
import "./prueba.css";
import { Container, Box, Typography, Tab, Tabs, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    h5: {
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
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
            <Box
              sx={{
                width: {
                  xs: "60%", // 100% width on extra-small and small screens
                  sm: "60%", // 80% width on small screens
                  md: "70%", // 70% width on medium screens and above
                },
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
              }}
            >
              <img
                src="/Images/fadia.png"
                alt="About Me"
                className="frame-style" // Aplica la clase aquí
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontFamily: "Raleway" }}
            >
              Sobre Mí
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontFamily: "Raleway" }}>
              Soy Fadia López, una profesional en Administración Financiera con
              un propósito claro de servir a otras personas a través del
              desarrollo integral de las Finanzas Personales. Durante los
              últimos 5 años, me he especializado en guiar a personas, parejas y
              emprendimientos en un viaje de evolución en la gestión del dinero,
              con el objetivo de lograr el bienestar financiero. Creo firmemente
              que todos pueden descubrir su potencial financiero y alcanzar una
              vida plena y satisfactoria a través del autoconocimiento y el
              desarrollo de hábitos saludables. Mi compromiso es brindar a
              través de FinerZen un servicio genuino, confiable y empático,
              enfocado en ayudar a mis clientes a tomar el control de sus
              finanzas y alcanzar sus metas financieras
            </Typography>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "white",
                color: "white",
                fontFamily: "Raleway",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{ color: "white", fontFamily: "Raleway" }}
              >
                <Tab
                  label="EDUCACIÓN"
                  sx={{ color: "white", fontFamily: "Raleway" }}
                />
                <Tab
                  label="CERTIFICACIONES"
                  sx={{ color: "white", fontFamily: "Raleway" }}
                />
                <Tab
                  label="HABILIDADES"
                  sx={{ color: "white", fontFamily: "Raleway" }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Especialista en Gerencia de Mercadeo, Universidad Jorge Tadeo
                Lozano
                <br />* Profesional en Administración Financiera, Universidad
                del Quindío
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Coach Ontológico, Axon Training
              </Typography>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Mentora en Programa Internacional Finanzas e Inversión para
                Mamás, En Nota Colombia
              </Typography>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Diplomado en Programación Neurolingüística, Universidad CES,
                Training Skills
              </Typography>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Diplomado en Liderazgo de Alto Desempeño, Universidad CES
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Planificación y ejecución de estrategias
              </Typography>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Análisis y planificación financiera
              </Typography>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Coaching y mentoring en el desarrollo personal y asesoramiento
                financiero
              </Typography>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Comunicación efectiva, gestión de creencias limitantes y
                motivación
              </Typography>
              <Typography sx={{ fontFamily: "Raleway" }}>
                * Liderazgo y gestión de equipos para alcanzar objetivos
              </Typography>
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

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
