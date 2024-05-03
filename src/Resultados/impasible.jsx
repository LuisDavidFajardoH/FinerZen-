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

export default function Impasible() {
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
               <strong>Impasible</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ¡Eres la personalidad Impasible! Alejado de las cadenas del
              materialismo, encuentra la verdadera riqueza en la libertad y la
              experiencia de vida. Sin embargo, esta aparente despreocupación
              también conlleva desafíos que podrían influir en su bienestar
              financiero y emocional.
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
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/impasible.png"
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
  "Enfoque en la felicidad interior: Valora las experiencias y relaciones sobre las posesiones materiales, encontrando la verdadera felicidad en los momentos compartidos y las conexiones emocionales.",
  "Desapego de las expectativas sociales: Se libera del peso de las expectativas sociales y los estándares de consumo, optando por un estilo de vida auténtico y alineado con sus valores más profundos.",
  "Flexibilidad y adaptabilidad: Al no atarse a las limitaciones del dinero, es flexible y adaptable ante los cambios financieros y las circunstancias imprevistas, encontrando soluciones creativas y resolviendo problemas con facilidad"
];

const challenges = [
  "Falta de previsión financiera: La falta de preocupación por el dinero puede llevarlo a descuidar la planificación financiera a largo plazo, dejándolo vulnerable ante emergencias o cambios inesperados en su situación económica",
  "Riesgo de dependencia: Al no priorizar la acumulación de riqueza, puede volverse dependiente de otros para cubrir necesidades financieras básicas, limitando su autonomía y libertad.",
  "Falta de inversión en el futuro: La falta de interés en el dinero puede llevarlo a no invertir en su futuro financiero. Esto podría resultar en una falta de preparación para la jubilación"
];

const identifyingPhrases = [
  "La verdadera riqueza está en las experiencias compartidas y las conexiones humanas, no en las posesiones materiales",
  "El dinero es importante, pero la libertad y la felicidad son aún más valiosas.",
  "Mi relación con el dinero es como un sábado sin planes: sé que está ahí, pero no estoy muy seguro de qué hacer con él."
];
