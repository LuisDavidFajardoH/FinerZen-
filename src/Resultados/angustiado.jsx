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

export default function Angustiado() {
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
              <strong>Preocupado</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ¡Eres la personalidad preocupado! Meticuloso y cauteloso, navega
              por las aguas del dinero con prudencia y atención. Sin embargo, su
              enfoque también enfrenta desafíos que pueden limitar su
              crecimiento financiero y su bienestar emocional.
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
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/angustiado.png"
              alt="Imagen representativa de un Gastador"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}> {/* Estilos para centrar */}
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="wa.link/ai39lf"
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
  "Planificación detallada: Se destaca por su capacidad para planificar minuciosamente cada aspecto de sus finanzas, anticipando posibles obstáculos y preparándose para enfrentarlos",
  "Responsabilidad y disciplina: Este perfil financiero muestra un alto grado de responsabilidad y disciplina en el manejo de su dinero, priorizando el ahorro y evitando gastos innecesarios. ",
  "Gestión del riesgo: Toma decisiones calculadas y evalúa cuidadosamente los riesgos antes de comprometerse con una inversión o transacción financiera, protegiendo así su patrimonio.",
];

const challenges = [
  "Falta de flexibilidad: La aversión al riesgo pueden llevarlo a evitar oportunidades que podrían generar crecimiento financiero, limitando su capacidad para adaptarse a cambios y aprovechar nuevas posibilidades",
  "Ansiedad financiera: El constante temor a cometer errores financieros puede generar ansiedad y estrés, dificultando su capacidad para disfrutar de la vida y tomar decisiones con confianza",
  "Perfeccionismo financiero: Puede caer en la trampa del perfeccionismo, buscando constantemente optimizar cada aspecto de sus finanzas. Este impulso por alcanzar la perfección puede llevar a la parálisis por análisis, dificultando la toma de decisiones financieras importantes y retrasando la acción necesaria para avanzar hacia sus metas financieras",
];

const identifyingPhrases = [
  "Más vale prevenir que lamentar: la prudencia es mi mejor aliada en el mundo financiero",
  "Cada decisión financiera requiere una evaluación meticulosa: la seguridad es mi prioridad número uno",
  "Mi estrategia financiera se basa en el principio de 'piensa dos veces, actúa nunca... o tal vez mañana",
];
