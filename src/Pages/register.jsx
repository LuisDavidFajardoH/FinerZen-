import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BotonWhatsapp from "../components/BotonWhatsapp/boton";
import { Helmet } from "react-helmet";

function RegistrationForm({ onSuccessfulRegistration }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [single, setSingle] = useState("");
  const [isFromCompany, setIsFromCompany] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("single", single);
    formData.append("isFromCompany", isFromCompany);
    if (isFromCompany === "Sí") {
      formData.append("companyName", companyName); // Solo añadir si pertenece a una empresa
    }

    const response = await fetch("https://formspree.io/f/xrgndywg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      onSuccessfulRegistration();
    } else {
      alert("Error al enviar el formulario. Inténtalo de nuevo.");
    }
  };

  if (submitted) {
    navigate("/encuesta");
  }

  return (
    <>
      <Helmet>
        <title>FinerZen - Registro</title>
        <meta
          name="description"
          content="Regístrate en FinerZen para acceder a soluciones personalizadas y prácticas que te ayudarán a alcanzar tu bienestar financiero."
        />
        <meta
          name="keywords"
          content="registro, FinerZen, bienestar financiero, soluciones personalizadas, gestión financiera"
        />
      </Helmet>

      <Navbar />
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            my: 8,
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "fadein 2s", // Animación de entrada
          }}
        >
          <Typography component="h1" variant="h5">
            Regístrate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Edad"
              name="age"
              type="number"
              autoComplete="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="single-label">Estado Civil</InputLabel>
              <Select
                labelId="single-label"
                id="single"
                value={single}
                label="Estado Civil"
                onChange={(e) => setSingle(e.target.value)}
              >
                <MenuItem value={"Soltero"}>Soltero</MenuItem>
                <MenuItem value={"Casado"}>Convivencia</MenuItem>
                <MenuItem value={"Divorciado"}>Separado</MenuItem>
              </Select>
              <FormHelperText>Selecciona tu estado civil</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="company-label">
                ¿Pertenece a una empresa?
              </InputLabel>
              <Select
                labelId="company-label"
                id="isFromCompany"
                value={isFromCompany}
                label="¿Pertenece a una empresa?"
                onChange={(e) => setIsFromCompany(e.target.value)}
              >
                <MenuItem value={"Sí"}>Sí</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
              <FormHelperText>
                Indica si perteneces a una empresa
              </FormHelperText>
              {isFromCompany === "Sí" && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="companyName"
                  label="Nombre de la empresa"
                  name="companyName"
                  autoComplete="company-name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              )}
            </FormControl>
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Al registrarte, aceptas el uso de tus datos personales conforme a
              nuestra Política de Privacidad.
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
          </Box>
        </Paper>
      </Container>
      <BotonWhatsapp />
      <Footer />
    </>
  );
}

export default RegistrationForm;
