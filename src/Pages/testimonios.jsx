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
    name: "Julia Anasta",
    text: "Praesent a libero sit amet mi facilisis mollis vitae sed ipsum.",
    image: "/path/to/julia.jpg",
  },
  {
    id: 2,
    name: "Tom Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/path/to/tom.jpg",
  },
  {
    id: 3,
    name: "Sara Conner",
    text: "Sed sed ex eget augue euismod posuere non under moto duis.",
    image: "/path/to/sara.jpg",
  },
  {
    id: 4,
    name: "John Smith",
    text: "Aenean ut eros et nisl sagittis vestibulum.",
    image: "/path/to/johns.jpg",
  },
  {
    id: 5,
    name: "John Smith",
    text: "Aenean ut eros et nisl sagittis vestibulum.",
    image: "/path/to/johns.jpg",
  },
  {
    id: 6,
    name: "John Smith",
    text: "Aenean ut eros et nisl sagittis vestibulum.",
    image: "/path/to/johns.jpg",
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
                  minHeight: "210px",
                  maxHeight: "230px",
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
