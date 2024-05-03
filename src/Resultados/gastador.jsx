import React from 'react';
import { Container, Typography, Paper, Grid, CardMedia, List, ListItem, ListItemIcon, ListItemText,Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importa el ícono de WhatsApp
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Importa un ícono de verificación
import HighlightOffIcon from '@mui/icons-material/HighlightOff'; // Importa un ícono de error/cancelación
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; // Importa un ícono para citas

export default function Gastador() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 8, overflow: "hidden", maxWidth: "100%", padding: 0 }}>
      <Paper elevation={6} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "auto", maxWidth: "none", padding: "2rem", backgroundColor: "#f3f4f6" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={15} sx={{ pr: 4 }}>
            <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'bold', color: "#5e35b1" }}>
               <strong>Gastador</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ¡Tienes la personalidad Gastador! Un alma libre que vive cada momento con pasión desenfrenada. Este perfil financiero se deleita en las experiencias y encuentra alegría en cada compra.
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
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/gastador.png"
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
  "Vive el presente: Abraza cada experiencia con entusiasmo, aprovechando al máximo el presente.",
  "Promueve la creatividad: Tu disposición a probar cosas nuevas fomenta la creatividad y la innovación en tu vida y en tu entorno.",
  "Genera conexiones significativas: Al compartir tus experiencias, construyes conexiones emocionales significativas con los demás."
];

const challenges = [
  "Riesgo de endeudamiento: La tendencia a gastar sin límites puede llevarte a endeudarte más allá de tus medios.",
  "Falta de planificación a largo plazo: La priorización del placer inmediato sobre la seguridad financiera a largo plazo puede generar estrés y preocupaciones en el futuro.",
  "Impacto en las relaciones personales: Los hábitos de gasto excesivo pueden generar tensiones en las relaciones personales y familiares."
];

const identifyingPhrases = [
  "La vida está llena de experiencias que no se pueden comprar, pero el dinero facilita muchas de ellas.",
  "No se trata de lo que tienes, sino de las aventuras que vives y los recuerdos que creas.",
  "El dinero no puede comprar la felicidad, ¡pero puedo intentar comprar todo lo que se le parezca!"
];
