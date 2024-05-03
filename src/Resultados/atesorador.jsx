import React from 'react';
import { Container, Typography, Paper, Grid, CardMedia, List, ListItem, ListItemIcon, ListItemText, Button  } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importa el ícono de WhatsApp
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Importa un ícono de verificación
import HighlightOffIcon from '@mui/icons-material/HighlightOff'; // Importa un ícono de error/cancelación
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; // Importa un ícono para citas

export default function Atesorador() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 8, overflow: "hidden", maxWidth: "100%", padding: 0 }}>
      <Paper elevation={6} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "auto", maxWidth: "none", padding: "2rem", backgroundColor: "#f3f4f6" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={15} sx={{ pr: 4 }}>
            <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'bold', color: "#5e35b1", }}>
              <strong>Atesorador</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            ¡Tienes la personalidad Atesorador! 
            Un guardián de la seguridad financiera y un maestro en la disciplina del ahorro. Este perfil financiero encuentra tranquilidad en la prudencia y fuerza en la planificación, pero también enfrenta desafíos que pueden limitar su capacidad para disfrutar plenamente de la vida.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: "#5e35b1" }}>
              Lo positivo:
            </Typography>
            <List>
              {positiveAspects.map((aspect) => (
                <ListItem key={aspect}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText primary={aspect} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: "#5e35b1" }}>
              El desafío:
            </Typography>
            <List>
              {challenges.map((challenge) => (
                <ListItem key={challenge}>
                  <ListItemIcon>
                    <HighlightOffIcon sx={{ color: "#f44336" }} />
                  </ListItemIcon>
                  <ListItemText primary={challenge} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: "#5e35b1" }}>
              Te identificas con frases como:
            </Typography>
            <List>
              {identifyingPhrases.map((phrase) => (
                <ListItem key={phrase}>
                  <ListItemIcon>
                    <FormatQuoteIcon sx={{ transform: "scaleX(-1)", color: "#ffeb3b" }} />
                  </ListItemIcon>
                  <ListItemText primary={phrase} sx={{ fontStyle: "italic" }} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body1" gutterBottom>
              ¡Es hora de tomar el control de tu futuro financiero! Descubre los secretos detrás de cada personalidad financiera y desbloquea las claves para el éxito. Entender tu relación con el dinero es el primer paso hacia una gestión financiera sólida y efectiva. ¡No te quedes atrás! ¡Actúa ahora y accede a la información que transformará tus finanzas para siempre!
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            <CardMedia
              component="img"
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/atesorador.png"
              alt="Imagen representativa de un Gastador"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}> {/* Estilos para centrar */}
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.link/yo9nm3"
              target="_blank"
            >
              ¡CONOCE MÁS!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

// Puedes definir estos arrays con el contenido que prefieras fuera del componente para mantener tu código limpio
const positiveAspects = [
  "Disciplina financiera: Es un maestro en el arte de la disciplina financiera, estableciendo metas claras y trabajando diligentemente para alcanzarlas.",
  "Previsión y estabilidad: Su enfoque conservador proporciona una sensación de seguridad y estabilidad, preparándolo para enfrentar cualquier imprevisto que la vida pueda presentar.",
  "Preparación para el futuro: Al priorizar el ahorro sobre el gasto impulsivo, está construyendo un sólido colchón financiero para el futuro, asegurando una jubilación confortable y la capacidad de afrontar cualquier emergencia."
];

const challenges = [
  "Falta de disfrute presente: El enfoque excesivo en el ahorro puede llevarlo a privarse de disfrutar del presente y de las experiencias de la vida.",
  "Riesgo de perder oportunidades: La aversión al riesgo puede hacer que pierda oportunidades de inversión o de disfrutar de experiencias significativas por temor a gastar dinero.  ",
  "Perfeccionismo financiero: Puede caer en la trampa del perfeccionismo financiero, buscando constantemente optimizar cada aspecto de sus finanzas. Esto puede llevar a la parálisis por análisis y dificultar la toma de decisiones financieras importantes."
];

const identifyingPhrases = [
  "Dinero ahorrado es dinero ganado, y cada dinero guardado es una inversión en mi futuro",
  "La seguridad financiera es la llave que abre las puertas a un futuro lleno de posibilidades y libertad",
  "¿Por qué gastar hoy lo que puedo guardar para comprar algo mejor... mañana... o pasado mañana... o tal vez en un futuro lejano?"   
];
