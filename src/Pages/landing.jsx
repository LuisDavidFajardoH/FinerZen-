import React from "react";
import { Box, Typography, Button, Container, Stack, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#a75ac2" },
    secondary: { main: "#6b66ff" },
    tertiary: { main: "#27dba4" },
    quaternary: { main: "#43ddff" },
    quinary: { main: "#fccd1f" },
  },
  typography: {
    h3: {
      fontWeight: 600,
      letterSpacing: "0.1rem",
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});

const StyledButton = styled(Button)({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#ffae34",
  },
});

const FeatureBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: 'white',
  borderRadius: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '250px',
  height: '150px',
  margin: '0 8px',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  }
});

function LandingPage() {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ color: "#fff", minHeight: "100vh", position: "relative" }}>
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            minHeight: "100vh",
            zIndex: 2,
          }}
        >
          <Box
            component="img"
            src={"/Images/fondo.webp"}
            alt="Background Shape"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              p: 4,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(219,215,255,0.8) 100%)",
              borderRadius: 2,
              width: "100%",
              maxWidth: "960px",
              minHeight: "500px",
              textAlign: "center",
              zIndex: 1,
              boxShadow: 5,
            }}
          >
            <Typography variant="h3" gutterBottom>
              Descubre Tu Personalidad Financiera
            </Typography>
            <Typography variant="body1">
              En FinerZen, te guiamos en un viaje de autodescubrimiento y
              transformación financiera.
            </Typography>
            <StyledButton variant="contained" sx={{ mt: 2 }}>
              Empieza tu viaje
            </StyledButton>
            <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: 'center' }}>
              <FeatureBox>
                <Typography variant="h6">Innovación</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
              </FeatureBox>
              <FeatureBox>
                <Typography variant="h6">Eficiencia</Typography>
                <Typography variant="body2">Consectetur adipiscing elit</Typography>
              </FeatureBox>
              <FeatureBox>
                <Typography variant="h6">Confiabilidad</Typography>
                <Typography variant="body2">Nunc malesuada fermentum</Typography>
              </FeatureBox>
            </Stack>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;
