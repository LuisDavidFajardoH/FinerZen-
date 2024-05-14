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

export default function Ambivalente() {
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
              <strong>Ambivalente</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ¡Eres la personalidad Ambivalente! Oscila entre la mesura y la
              generosidad, enfrentándose a un dilema constante entre ahorrar
              para el futuro y disfrutar del presente
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
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/ambivalente.png"
              alt="Imagen representativa de un Gastador"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}> {/* Estilos para centrar */}
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.link/mfh31n"
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
  "Previsión y disfrute: Tiene la capacidad de planificar para el futuro mientras disfruta del presente, encontrando un equilibrio entre la seguridad financiera y la gratificación inmediata.",
  "Flexibilidad y adaptabilidad: Este perfil financiero es capaz de ajustar su enfoque según las circunstancias, mostrando una habilidad para adaptarse a cambios inesperados en su situación financiera y personal.  ",
  "Generosidad y moderación: A pesar de sus impulsos opuestos, encuentra formas de ser generoso consigo mismo y con los demás, manteniendo un equilibrio saludable entre la indulgencia y la moderación.",
];

const challenges = [
  "Dificultad para tomar decisiones: La ambivalencia constante puede dificultar la toma de decisiones financieras importantes, dejándolo atrapado en un ciclo de indecisión y ansiedad.",
  "Riesgo de descontrol financiero: La falta de un plan financiero claro puede llevarlo a caer en patrones de gasto impulsivo o en la incapacidad de ahorrar adecuadamente para metas futuras.",
  "Conflicto interno y estrés financiero: El constante conflicto entre el deseo de ahorrar y la tentación de derrochar puede generar un alto nivel de estrés financiero. Esta lucha interna puede afectar negativamente su bienestar emocional y su capacidad para tomar decisiones financieras racionales y efectivas.",
];

const identifyingPhrases = [
  "Vivir el momento es importante, pero también lo es prepararse para el futuro",
  "El equilibrio entre ahorrar y disfrutar es la clave para una vida financiera satisfactoria",
  "Soy como un DJ de la economía: guardo un billete y lo gasto en la pista de baile... ¡y así sucesivamente!",
];
