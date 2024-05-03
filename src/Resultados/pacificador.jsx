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

export default function Pacificador() {
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
             <strong>Pacificador</strong>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ¡Eres la personalidad Pacificador! Viendo el mundo a través de una
              lente única: cree que el dinero es una energía negativa que
              corrompe el espíritu humano. En su búsqueda de una vida auténtica
              y significativa, prioriza las experiencias sobre la acumulación de
              riqueza material.
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
              image="https://raw.githubusercontent.com/LuisDavidFajardoH/FinerZen/main/pacificador.png"
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
  "Enfoque en la sostenibilidad: Abraza un estilo de vida sostenible, optando por prácticas eco-friendly y consumiendo de manera consciente para preservar el medio ambiente.",
  "Espíritu de comunidad: Este perfil financiero valora las relaciones humanas y la colaboración sobre la acumulación de riqueza material, creando redes de apoyo y solidaridad dentro de su comunidad.",
  "Bienestar integral: Busca el equilibrio entre el bienestar físico, mental y espiritual, priorizando la salud y la felicidad sobre la búsqueda de la riqueza material."
];

const challenges = [
  "Falta de planificación financiera: La despreocupación por el dinero puede llevarlo a descuidar la planificación financiera a largo plazo, dejándolo vulnerable ante crisis económicas o emergencias inesperadas",
  "Riesgo de dependencia: Al rechazar la acumulación de riqueza material, puede volverse dependiente de otros para cubrir sus necesidades financieras básicas, limitando su autonomía y libertad",
  "Percepción negativa del dinero: Tiende a percibir el dinero como algo negativo o corrupto, lo que puede limitar su capacidad para prosperar financieramente. Esta mentalidad puede resultar en una auto-sabotaje inconsciente de oportunidades financieras y en una resistencia a buscar el crecimiento económico"
];

const identifyingPhrases = [
  "La verdadera abundancia se encuentra en la conexión con la naturaleza y en el amor compartido con la comunidad",
  "La paz interior y la armonía con el universo son las verdaderas riquezas de la vida",
  "Prefiero ser rico en amor y amistad que, en billetes, ¡al menos así no tengo que lidiar con los impuestos del corazón!"
];
