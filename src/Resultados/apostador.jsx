import React from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button, 
} from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importa el ícono de WhatsApp
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; // Importa un ícono de verificación
import HighlightOffIcon from "@mui/icons-material/HighlightOff"; // Importa un ícono de error/cancelación
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"; // Importa un ícono para citas

export default function Apostador() {
  return (
    <Container
      component="main"
      sx={{ mt: 8, mb: 8, overflow: "hidden", maxWidth: "100%", padding: 0 }}
    >
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "auto",
          maxWidth: "none",
          padding: "2rem",
          backgroundColor: "#f3f4f6",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} lg={15} sx={{ pr: 4 }}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold", color: "#5e35b1" }}
            >
            <strong>Apostador</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ¡Eres la personalidad Apostador! Sumergido en el riesgo y la
              anticipación, buscando la emoción de cada movimiento financiero.
              Sin embargo, su enfoque también acarrea desafíos que podrían poner
              en peligro su estabilidad financiera y emocional.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#5e35b1" }}
            >
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
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#5e35b1" }}
            >
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
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#5e35b1" }}
            >
              Te identificas con frases como:
            </Typography>
            <List>
              {identifyingPhrases.map((phrase) => (
                <ListItem key={phrase}>
                  <ListItemIcon>
                    <FormatQuoteIcon
                      sx={{ transform: "scaleX(-1)", color: "#ffeb3b" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={phrase} sx={{ fontStyle: "italic" }} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body1" gutterBottom>
              ¡Es hora de tomar el control de tu futuro financiero! Descubre los
              secretos detrás de cada personalidad financiera y desbloquea las
              claves para el éxito. Entender tu relación con el dinero es el
              primer paso hacia una gestión financiera sólida y efectiva. ¡No te
              quedes atrás! ¡Actúa ahora y accede a la información que
              transformará tus finanzas para siempre!
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            <CardMedia
              component="img"
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/apostador.png"
              alt="Imagen representativa de un Gastador"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}> {/* Estilos para centrar */}
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.link/s80eoh"
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
const positiveAspects = ["Audacia y ambición: No teme desafiar los límites y arriesgar en busca de ganancias significativas, mostrando una audacia admirable en sus movimientos financieros.", "Visión de oportunidad: Posee una capacidad única para identificar oportunidades de inversión y capitalizar en momentos clave, mostrando una visión aguda y estratégica del mercado", "Resiliencia y adaptabilidad: Ante las fluctuaciones del mercado, demuestra una notable resiliencia, adaptándose rápidamente a los cambios y aprendiendo de cada experiencia, incluso de las pérdidas."];

const challenges = ["Riesgo de pérdida extrema: La búsqueda constante de emociones y ganancias puede llevar a asumir riesgos excesivos, lo que resulta en pérdidas financieras significativas y un impacto negativo en su bienestar emocional", "Falta de diversificación: La concentración excesiva en un solo tipo de inversión o activo puede dejarlo vulnerable a la volatilidad del mercado y limitar su capacidad para proteger su cartera de riesgos potenciales", "Impulso por recuperar pérdidas: Puede caer en la trampa emocional de intentar recuperar rápidamente las pérdidas sufridas. Este impulso puede llevar a tomar decisiones precipitadas y poco fundamentadas, aumentando }el riesgo de pérdida y dañando la confianza en sus habilidades financieras."];

const identifyingPhrases = ["En el juego de la vida, cada inversión es una apuesta, y cada apuesta una oportunidad de éxito", "El riesgo es la esencia de la recompensa, y la emoción del mercado es el combustible de la innovación financiera", "Mi estrategia financiera es tan segura como una apuesta a ciegas en un casino... ¡pero con un poco más de emoción!"];
