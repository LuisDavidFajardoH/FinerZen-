import React from "react";
import { Card, CardContent, CardMedia, Typography, Container, Grid, CardActionArea } from "@mui/material";

function ServiceCards() {
  const services = [
    {
      title: "Consejería en finanzas personales",
      description: "Optimiza tu relación con el dinero mediante un enfoque personalizado y práctico para mejorar tu bienestar financiero.",
      imageUrl: "/Images/personal.webp",
      link: "https://wa.link/d506d9",
    },
    {
      title: "Consejería financiera para parejas",
      description: "Fortalece la gestión financiera en tu relación de pareja con estrategias y soluciones adaptadas a ambos.",
      imageUrl: "/Images/pareja.webp",
      link: "https://wa.link/qgwkt9",
    },
    {
      title: "Consejería financiera empresarial",
      description: [
        "Impulsa la sostenibilidad financiera de tu emprendimiento con una asesoría focalizada en la organización de tu negocio.",
        "Potencia a tu equipo a través de conversatorios enfocados en el desarrollo de habilidades en finanzas personales."
      ],
      imageUrl: "/Images/empresas.webp",
      link: "https://wa.link/9nrgsb",
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
      }
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
              <CardActionArea href={service.link} target="_blank">
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: 'cover' }}
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
                  {typeof service.description === 'string' ? (
                    <Typography variant="body2" color="textSecondary" sx={{color:'white', fontFamily: 'Raleway',}}>
                      {service.description}
                    </Typography>
                  ) : (
                    service.description.map((part, index) => (
                      <Typography key={index} variant="body2" color="textSecondary" sx={{color:'white', fontFamily: 'Raleway',}}>
                        {part}{index < service.description.length - 1 && <br />}
                      </Typography>
                    ))
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceCards;
