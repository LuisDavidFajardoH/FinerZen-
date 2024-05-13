import React from "react";
import { Card, CardContent, CardMedia, Typography, Container, Grid } from "@mui/material";

function ServiceCards() {
  const services = [
    {
      title: "Sesiones personal financiera",
      description: "Optimiza tu relación con el dinero mediante un enfoque personalizado y práctico para mejorar tu salud financiera.",
      imageUrl: "/Images/personal.webp",
    },
    {
      title: "Sesiones para parejas financieras",
      description: "Fortalece la gestión financiera en tu relación de pareja con estrategias y soluciones adaptadas a ambos.",
      imageUrl: "/Images/pareja.webp",
    },
    {
      title: "Sesiones empresariales financieras",
      description: "Impulsa la salud financiera de tu empresa con asesorías personalizadas para alcanzar la sostenibilidad y el crecimiento económico.",
      imageUrl: "/Images/empresas.webp",
    },
  ];

  return (
    <Container sx={{

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Raleway',
      '@media (max-width:600px)': {
        marginRight: "300px",
      },
      fontFamily: 'Raleway',
    }}>
      <Grid container spacing={4} justifyContent="center">
        {services.map(service => (
          <Grid item key={service.title} xs={12} sm={6} md={4}>
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 345,
              width: '100%',
              height: '100%',
              borderRadius: 4,
              fontFamily: 'Raleway',
              transition: 'transform 0.3s ease-in-out',
              '@media (max-width:600px)': {
                marginRight: "300px",
              },
             
              ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 18px 0 rgba(0,0,0,0.5)',
              },
              backgroundColor: '#1d1d1db3',
              
            }}>
              <CardMedia
                component="img"
                sx={{
                  height: 200,
                  objectFit: 'cover'
                  
                }}
                image={service.imageUrl}
                alt={service.title}
              />
              <CardContent sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: '#cccafc',
                fontFamily: 'Raleway',
                
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Raleway'}}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{color:'white', fontFamily: 'Raleway',}}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceCards;
