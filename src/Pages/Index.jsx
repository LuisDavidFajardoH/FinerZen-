import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Survey from "../preguntas/survey";
import { Box, Typography, Button, Container, Paper } from "@mui/material";


function Index() {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleStartClick = () => {
    setShowSurvey(true);
  };

  if (showSurvey) {
    return (
      <div>
        <Navbar />
        <Survey />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Contenedor central con el contenido */}
      <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
        <Paper
          elevation={6}
          sx={{
            my: 8,
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "1px 4px 80px 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Título */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "#6B66FF", textAlign: "center" }}
          >
            Prueba de personalidad financiera
          </Typography>

          {/* Descripción */}
          <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
            ¿Alguna vez has reflexionado sobre como tu relación con el dinero
            puede transformar tu vida? En FinerZen creemos firmemente en el
            poder del autoconocimiento para lograr un cambio real en tus
            finanzas y desarrollamos para ti una prueba, que sin duda te
            mostrará tu personalidad financiera predominante.
            <br />
            ¡Toma acción ahora! Descubre cuales son algunas de las principales
            características de tu personalidad y como impactan tu vida…
          </Typography>

          {/* Imagen */}
          <Box
            component="img"
            maxHeight="lg"
            sx={{
              width: "60%",
              height: "auto",
              borderRadius: "8px",
              maxHeight: { xs: 233, md: 167, lg: 350 },
              maxWidth: { xs: 350, md: 250, lg: 250 },
              my: 4,
            }}
            alt="Ken Honda"
            src="/Images/img.webp"
          />

          {/* Botón */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#6B66FF",
              ":hover": {
                backgroundColor: "#FCCD1F", // Cambiar para el estado hover si se desea
              },
              ":active": {
                backgroundColor: "#4e49cc", // Cambiar para el estado active/clicked
              },
            }}
            onClick={handleStartClick}
          >
            Inicio
          </Button>
        </Paper>
      </Container>

      <Footer />
    </div>
  );
}

export default Index;
