import React from "react";
import { Typography, Container, Grid, Paper, Avatar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#81c784",
    },
    background: {
      paper: "#1d1d1db3",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "Arial",
    h2: {
      fontWeight: "bold",
      color: "#000000",
    },
    body1: {
      fontSize: "1rem",
      color: "#ffffff",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 12px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
});

const testimonials = [
  {
    id: 1,
    name: "Life Academy",
    text: "Gracias por este regalo que nos diste hoy.",
    image: "/Images/life.jpeg",
  },
  {
    id: 2,
    name: "Ebelyn López (Propietaria)",
    text: "Soy bendecida por encontrar a Fadia; desde que inicié mi acompañamiento, he podido darle dirección a mi emprendimiento y a mis finanzas, enfocada y motivada a alcanzar mis metas, siempre con un objetivo claro.",
    image: "/Images/oso.jpg",
  },
  {
    id: 3,
    name: "Bost Holding",
    text: "Gracias por el apoyo brindado en la capacitación de nuestro personal, estamos muy agradecidos por el profesionalismo y la dedicación que nos brindaron.",
    image: "/Images/bost.jpg",
  },
  {
    id: 4,
    name: "Valeria Uribe",
    text: "Gracias por ayudarme a cambiar mi vida para mejor.",
    image: "/Images/valeria.jpg",
  },
  {
    id: 5,
    name: "Juliana Villegas",
    text: "Fadia no sabes cuanto te agradezco, por todo, que bendición poder conocerte.",
    image: "/Images/juliana.jpg",
  },
  {
    id: 6,
    name: "Paula Montoya",
    text: "Muchas gracias, ame en serio hablar contigo, Muchas gracias de corazón.",
    image: "/Images/paula.jpg",
  },
];

function Testimonials() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
        
        <Grid container spacing={2} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.id}>  
              <Paper
                sx={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "background.paper",
                  minHeight: "280px",
                  maxHeight: "280px",
                  overflow: "auto",
                }}
              >
                <Avatar
                  src={testimonial.image}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography
                  variant="body1"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  {testimonial.text}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Testimonials;
