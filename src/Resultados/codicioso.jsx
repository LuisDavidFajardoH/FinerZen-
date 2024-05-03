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

export default function Codicioso() {
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
             <strong>Codicioso</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ¡Eres la personalidad Codicioso! Un visionario en el mundo de las
              finanzas, impulsado por una insaciable sed de éxito y prosperidad.
              Este perfil financiero es un líder nato, con la determinación de
              alcanzar las cimas más altas, pero también enfrenta desafíos que
              podrían poner en riesgo su bienestar financiero y emocional.
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
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/codicioso.png"
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
  "Ambición ilimitada: Persigue incansablemente sus metas financieras, desafiando los límites y superando obstáculos con audacia y determinación.",
  "Visión estratégica: Su capacidad para identificar oportunidades y trazar planes estratégicos lo coloca en la vanguardia del éxito financiero, anticipando y aprovechando las tendencias del mercado.",
  "Resiliencia Inquebrantable: Ante los reveses y las adversidades, se levanta fuerza, transformando los desafíos en oportunidades de crecimiento y aprendizaje."
];

const challenges = [
  "Riesgo de agotarse: La búsqueda constante de la grandeza financiera puede llevar al a sacrificar su bienestar personal, agotando sus recursos físicos y emocionales en busca del éxito.",
  "Falta de satisfacción: A pesar de sus logros, puede experimentar una sensación de vacío interior, buscando constantemente más dinero y reconocimiento para llenar un hueco emocional.",
  "Impacto en las relaciones: La obsesión por el dinero y el éxito puede generar tensiones en las relaciones personales y familiares, dejándolo aislado y desconectado emocionalmente."
];

const identifyingPhrases = [
  "El dinero es el combustible que alimenta mis sueños y me impulsa hacia la grandeza",
  "En un mundo de oportunidades infinitas, mi destino financiero es ilimitado",
  "Dicen que el dinero no crece en los árboles, pero yo estoy plantando un jardín de billetes",
];
